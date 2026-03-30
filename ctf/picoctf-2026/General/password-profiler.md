---
layout: single
title: "Password Profiler"
categories: [CTF, general]
permalink: /ctf/picoctf-2026/General/password-profiler/
---

## Description:
We intercepted a suspicious file from a system, but instead of the password itself, it only contains its SHA-1 hash. Using OSINT techniques, you are provided with personal details about the target. Your task is to leverage this information to generate a custom password list and recover the original password by matching its hash.

## Solution:
1. In the password checker source code, a comment mentions that the wordlist should be generated using CUPP. <br>
![Source code comment](images/password-profiler-1.png)
2. With the given personal details about the target, I used [CUPP (Common User Passwords Profiler)](https://github.com/mebus/cupp) to generate a custom password list. 
3. After renaming the file to match the filename expected by the checker, which is `passwords.txt`, I ran the password checker to get the flag.

## Flag:
picoCTF{Aj_15901990}