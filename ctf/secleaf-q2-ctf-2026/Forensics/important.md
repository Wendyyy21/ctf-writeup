---
layout: single
title: "Important"
categories: [CTF, forensics]
permalink: /ctf/secleaf-q2-ctf-2026/Forensics/important/
---

## Description:
A suspicious image file was recovered during investigation. It appears harmless, but appearances can be misleading. <br>
Inspect the file carefully, determine its true format, and recover the hidden flag. <br>
File Provided: important.jpg <br>
Flag Format: SecLeaf{}

## Solution:
1. I tried to open the image file but failed, so I used `file` to check the file type and found that it's actually a ZIP archive! <br>
![File type](images/important-1.png)
2. I used `mv` to change the file extension to `.zip` then unzipped the archive to retrieve the flag. <br>
![Unzip archive](images/important-2.png)

## Flag:
SecLeaf{extensions_can_lie}