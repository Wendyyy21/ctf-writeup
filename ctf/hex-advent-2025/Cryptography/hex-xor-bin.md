---
layout: single
title: "Hex Xor Bin"
categories: [CTF, cryptography]
permalink: /ctf/hex-advent/Cryptography/hex-xor-bin/
---

## Description:
Let's decrypt some messages together!

Difficulty: Easy

## Solution:
1. In Stage 1, we are given a ciphertext encrypted using Caesar cipher. I used [dcode](https://www.dcode.fr/caesar-cipher) to decrypt it using bruteforce and obtained the plaintext.
2. In Stage 2, we are given a hexadecimal value and asked to convert it to binary. I used [CyberChef](https://gchq.github.io/CyberChef/) from hex and to binary operations to obtain the binary value.
3. In Stage 3, we are asked to XOR two binary numbers. I used [dcode](https://www.dcode.fr/xor-cipher) to calculate the result. Alternatively, the calculation can be done in python, `print(bin(0b11010010^0b00111001))`.
4. In Stage 4, we are given the hexadecimal values of B and A^B, and we need to find A. Since XOR is its own inverse, A can be found by XORing the values of A^B and B. I did this in python, `print(hex(int("1a2b3c4d", 16) ^ int("d0d586f3", 16)))`
5. Finally, in Stage 5, we are given three hexadecimal ciphertexts and a key. Similar to Stage 4, XOR each pair of values to get the three parts of the flag.

## Flag:
HEX{_to_bin_with_xoring_4nd_w1th_43C!!}