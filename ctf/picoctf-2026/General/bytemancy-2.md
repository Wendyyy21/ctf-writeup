---
layout: single
title: "Bytemancy 2"
categories: [CTF, general]
permalink: /ctf/picoctf-2026/General/bytemancy-2/
---

## Description:
Can you conjure the right bytes?

## Solution:
1. This time, we need to send raw hex bytes. Using `pwntools`, <br>
```
#!/usr/bin/python
from pwn import *
 
host = "lonely-island.picoctf.net"
port = 58621
 
p = remote(host, port) 
payload = b"\xFF" * 3
p.sendline(payload)
p.interactive()
```

## Flag:
picoCTF{3ff5_4_d4yz_86a39d4b}