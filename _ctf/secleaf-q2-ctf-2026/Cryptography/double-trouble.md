---
layout: single
title: "Double Trouble"
categories: [CTF, cryptography]
permalink: /ctf/secleaf-q2-ctf-2026/Cryptography/double-trouble/
---

## Description:
We intercepted a suspicious encoded transmission during routine monitoring. <br>
Analysts believe the message was processed through multiple transformation layers before being transmitted. <br>
Can you recover the original message? <br>
Flag format: SecLeaf{}

## Solution:
1. We are given the string: `526e4a7757584a756333737759544e66655452734d325666616a526d595764664d3245776148523166513d3d0a`.
2. I used CyberChef to decode the string [From hex -> From base64 -> Rot13](https://gchq.github.io/CyberChef/#recipe=From_Hex('Auto')From_Base64('A-Za-z0-9%2B/%3D',true,false)ROT13(true,true,false,13)&input=NTI2ZTRhNzc1NzU4NGE3NTYzMzM3Mzc3NTk1NDRlNjY2NTU0NTI3MzRkMzI1NjY2NjE2YTUyNmQ1OTU3CjY0NjY0ZDMyNDU3NzYxNDg1MjMxNjY1MTNkM2QwYQ). <br>

## Flag:
SecLeaf{0n3_l4y3r_w4snt_3n0ugh}