---
layout: single
title: "Hidden in Plain Sight"
categories: [CTF, cryptography]
permalink: /ctf/web-arena/Cryptography/hidden-in-plain-sight/
---

## Description:
Our agent intercepted this strange message. It seems to use multiple encoding layers: navigate the link : https://czy21.test1.ip-167-235-30-42.swiftwave.xyz/

## Solution:
1. When we navigate to the given link, we see a string encoded in base64 under this challenge. 
2. Use CyberChef to decode it (base64 twice), and we get the flag.

## Flag:
STURSEC{double_trouble_base64}