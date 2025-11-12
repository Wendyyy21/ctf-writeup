---
layout: single
title: "Blank"
categories: [CTF, general]
permalink: /ctf/v1t/General/blank/
---

## Description:
This image is blank is it ?

## Solution:
1. We are given an image which is just a plain white background. 
2. Open the file in `stegsolve` and inspect the individual bit planes. The flag is visible in red plane 0.
![Found the flag](images/blank-1.png)

## Flag:
v1t{wh1t3_3y3s}