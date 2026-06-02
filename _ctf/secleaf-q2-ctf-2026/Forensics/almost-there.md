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
![Unable to unzip]({{"/assets/ctf/secleaf-q2-ctf-2026/Forensics/almost-there-1.png" | relative_url}})
2. I ran `strings backup.zip` and found the flag. <br>
![Found flag]({{"/assets/ctf/secleaf-q2-ctf-2026/Forensics/almost-there-2.png" | relative_url}})

## Flag:
SecLeaf{repair_the_archive}