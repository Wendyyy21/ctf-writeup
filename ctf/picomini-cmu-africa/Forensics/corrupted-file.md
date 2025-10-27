---
layout: single
title: "Corrupted File"
categories: [CTF, forensics]
permalink: /ctf/picomini-cmu-africa/Forensics/corrupted-file/
---

## Description:
This file seems broken... or is it? Maybe a couple of bytes could make all the difference. Can you figure out how to bring it back to life?

## Solution:
1. We are given a corrupted file (named “file”). Using the `file` command gives us “data”, which implies that the file’s magic number is damaged. 
2. Using `hexeditor`, we can see the first few bytes of the file. Comparing them to the magic numbers of common files, we can guess that the file is probably a JPEG file. 
3. Fix the first few bytes, and save the file. Open the image file. The flag is in the image.

## Flag:
picoCTF{r3st0r1ng_th3_by73s_b67c1558}