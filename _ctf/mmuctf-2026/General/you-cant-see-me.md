---
layout: single
title: "You Can't See Me!"
categories: [CTF, general]
permalink: /ctf/mmuctf-2026/General/you-cant-see-me/
---

## Description:
An old server was left exposed. Connect to the service, investigate, and retrieve the flag from the john account.

## Solution:
1. The contents pf `/etc/shadow` has been copied into `/home/ctfplayer`. <br>
![/etc/shadow]({{"/assets/ctf/mmuctf-2026/General/you-cant-see-me-1.png" | relative_url}})
2. I could also read the contents of `/etc/passwd`. <br>
![/etc/passwd]({{"/assets/ctf/mmuctf-2026/General/you-cant-see-me-2.png" | relative_url}})
3. With both `/etc/shadow` and `/etc/passwd`, I could use `john` to crack the password. *(Also, the username of the target account is john, which indicates johntheripper)* <br>
![Cracking password]({{"/assets/ctf/mmuctf-2026/General/you-cant-see-me-3.png" | relative_url}})
4. I switched to john's account and got the flag from `/home/john/.flag.txt`

## Flag:
MMUCTF{ch4ng3_y0ur_p4ssw0rd_j0hn_1ts_t00_w34k!}