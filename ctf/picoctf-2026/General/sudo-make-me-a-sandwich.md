---
layout: single
title: "SUDO MAKE ME A SANDWICH"
categories: [CTF, general]
permalink: /ctf/picoctf-2026/General/sudo-make-me-a-sandwich/
---

## Description:
Can you read the flag? I think you can!

## Solution:
1. After connecting to the instance with the given username and password, I used `ls` to view the files available. I found a file named flag.txt, which should contain the flag. 
2. I tried using `cat` to view the contents of the file, but I did not have the necessary permissions. I used `sudo -l` to view the permissions the current user has and found that I can use `emacs`, which is a text editor, on all files. <br>
![Listing user permissions](images/sudo-make-me-a-sandwich-1.png)
3. I used `emacs` to open the flag file.

## Flag:
picoCTF{ju57_5ud0_17_c2c0d2e2}