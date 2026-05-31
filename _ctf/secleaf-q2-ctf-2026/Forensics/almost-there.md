---
layout: single
title: "Almost there"
categories: [CTF, forensics]
permalink: /ctf/secleaf-q2-ctf-2026/Forensics/almost-there/
---

## Description:
The backup archive seems damaged. <br>
But maybe not everything is lost. <br>
Flag Format: SecLeaf{}

## Solution:
1. I tried to extract the given zip file but got an error. <br>
![Unable to unzip](images/almost-there-1.png)
2. I ran `strings backup.zip` and found the flag. <br>
![Found flag](images/almost-there-2.png)

## Flag:
SecLeaf{repair_the_archive}