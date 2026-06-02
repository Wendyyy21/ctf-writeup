---
layout: single
title: "forgotten_snapshot"
categories: [CTF, forensics]
permalink: /ctf/secleaf-q2-ctf-2026/Forensics/forgotten-snapshot/
---

## Description:
We recovered this image from a damaged backup archive.<br>
Analysts believe the original owner attempted to conceal sensitive information before deletion.<br>
Some image data may have survived recovery.<br>
Flag format: SecLeaf{}

## Solution:
1. I opened the given image file and didn't find anything interesting. <br>
![Challenge file]({{"/assets/ctf/secleaf-q2-ctf-2026/Forensics/forgotten-snapshot-1.png" | relative_url}})
2. I used `file` to see if I could find anything interesting about the file and found the flag in a comment. <br>
![Found flag in comment]({{"/assets/ctf/secleaf-q2-ctf-2026/Forensics/forgotten-snapshot-2.png" | relative_url}})

## Flag:
SecLeaf{metadata_never_lies}