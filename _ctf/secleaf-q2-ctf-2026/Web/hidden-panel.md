---
layout: single
title: "Hidden_panel"
categories: [CTF, web]
permalink: /ctf/secleaf-q2-ctf-2026/Web/hidden-panel/
search: true
---

## Description:
We discovered a partially exposed internal web portal during reconnaissance. <br>
Developers claimed sensitive endpoints were "properly hidden." <br>
Can you discover what was left behind? <br>
Flag format: SecLeaf{}

## Solution:
1. I accessed the website using a browser and viewed the source code but didn't find anything interesting.
2. Next, I visited `robots.txt` and found the flag. <br>
![Robots](images/hidden-panel-1.png) <br>

## Flag:
SecLeaf{r0b0ts_sh0uldnt_t4lk}