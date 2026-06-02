---
layout: single
title: "military_grade_encryption"
categories: [CTF, cryptography]
permalink: /ctf/secleaf-q2-ctf-2026/Cryptography/military-grade-encryption/
---

## Description:
We intercepted an encrypted military transmission during routine monitoring. <br>
Analysts were unable to identify the encryption scheme used. <br>
Can you recover the hidden message? <br>
Flag format: SecLeaf{}

## Solution:
1. We are given the following string: `U2VjTGVhZntiNDUzNjRfMXNfbjB0XzNuY3J5cHQxMG59`. 
2. I decoded the string using base64 and got the flag. <br>
![Flag]({{"/assets/ctf/secleaf-q2-ctf-2026/Cryptography/military-grade-encryption-1.png" | relative_url}}) 

## Flag:
SecLeaf{b45364_1s_n0t_3ncrypt10n}