---
layout: single
title: "Byte Checker"
categories: [CTF, RE]
permalink: /ctf/mmuctf-2026/ReverseEngineering/byte-checker/
---

## Description:
First time dipping your toes into reverse engineering? This one's a good warm-up. Take a look at the binary and figure out what is the flag.

## Solution:
1. Open the file in Ghidra and analyse the assembly. We find a huge `if` statement that validates user input. <br> 
![if condition]({{"/assets/ctf/mmuctf-2026/ReverseEngineering/byte-checker-1.png" | relative_url}})
2. I rearranged the given characters and got part of the flag, but some characters were still unknown, since the if condition did not mention explicit values for some positions.
3. I guessed some of the remaining characters and inserted random fillers in the others that I couldn't guess, and it worked.

## Flag:
MMUCTF{e45yy_p34Zy_r3V3r51ng_ch4113Ng3_6cead1b6d5daab7eafe33aa110c5cbf4}