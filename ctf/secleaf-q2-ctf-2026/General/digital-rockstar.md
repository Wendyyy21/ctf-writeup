---
layout: single
title: "Digital Rockstar"
categories: [CTF, general]
permalink: /ctf/secleaf-q2-ctf-2026/General/digital-rockstar/
---

## Description:
Some programmers write code. Others write poetry. <br>
Can you understand this digital rockstar? <br>
```
    every space matters.also i is not i
```
Flag Format: SecLeaf{}

## Solution:
1. We are given some code:
```
Midnight is Sec
Shadow is leaf
Chaos is poetry 
Neon is is fun

Dreams are Midnight with Shadow with Chaos with Neon

Say Dreams
```
2. From the name of the challenge, I thought that the code given is written in the Rockstar programming language, so I used an online compiler to get the output `8464544`.
3. I wrapped this in the flag format and submitted it, but it was wrong.
4. The challenge description mentioned that every space matters, so maybe it's not actually meant to be interpreted as Rockstar code. I tried to interpret the code logically and guessed that the four strings are concatenated to form Dreams. So the flag is probably SecLeaf{poetry_is_fun}. 
5. I tried submitting this but it wasn't correct either. The challenge description also says "i is not i". In leetspeak, i is 1, so I replaced i with 1 and got the correct flag.

## Flag:
SecLeaf{poetry_1s_fun}