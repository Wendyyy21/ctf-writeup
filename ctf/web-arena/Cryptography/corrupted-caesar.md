---
layout: single
title: "Corrupted Caesar"
categories: [CTF, cryptography]
permalink: /ctf/web-arena/Cryptography/corrupted-caesar/
---

## Description:
We've intercepted a secret message, but it appears to be encrypted with a variation of Caesar cipher. The encryption seems to use a different shift for each character based on its position. The shift for each character is calculated as: shift = (position_index + 5) % 26. Can you recover the original message? "Xnkjtrx yt ymj hqzg! Ymj kqfl nx KQFL{h4jx4w_b1ym_y2bnxy}" Submit it in STURSEC{} format

## Solution:
1. The challenge described how our message was encrypted using a unique variation of the classic Caesar cipher. They even told us how to calculate the shift! I wrote a Python script to calculate the shift for each character and decrypt the message. 
2. But it didn’t work 😐. All I got was gibberish which didn’t even make sense. 
3. After trying to debug my code for a long time, I tried to decrypt it using dcode and it was decrypted with a simple shift of 5 (**same** shift for all characters). 
*Note to self: there’s no such thing as a free lunch, including a CTF challenge directly telling you how to calculate the shift.*

## Flag:
STURSEC{c4es4r_w1th_t2wist}