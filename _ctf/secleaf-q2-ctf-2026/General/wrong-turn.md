---
layout: single
title: "wrong_turn"
categories: [CTF, general]
permalink: /ctf/secleaf-q2-ctf-2026/General/wrong-turn/
---

## Description:
There is Secure vault which has hard coded flag in it. <br>
Decrypt the password to unlock the vault. <br>
Flag format: SecLeaf{}

## Solution:
1. We are given an executable file which is supposed to contain a hard coded flag. I ran `strings wrong_turn` and found UPX strings, indicating that binary has been packed using UPX. <br>
![UPX strings](images/wrong-turn-1.png) <br>
2. I unpacked the file using `upx -d wrong_turn`, then used `strings wrong_turn` to find the flag.
![Found flag](images/wrong-turn-2.png) <br>

## Flag:
SecLeaf{hardcoded_secrets_again}