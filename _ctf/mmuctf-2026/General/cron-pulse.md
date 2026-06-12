---
layout: single
title: "Cron-pulse"
categories: [CTF, general]
permalink: /ctf/mmuctf-2026/General/cron-pulse/
---

## Description:
A routine system review flagged unusual behavior on one of the internal servers. Everything appears normal during manual checks, but something continues to trigger in the background at fixed intervals. You’ve been tasked to investigate what is happening behind the system’s surface and retrieve the flag.

## Solution:
1. From the name of the challenge, I guessed that it involves exploiting a writable cron job as a privilege escalation vector, so I immediately checked the cron table. <br>
![Checking crontab]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-1.png" | relative_url}})
2. As expected, a shell script runs as `root` every minute. Next, I checked the permissions of this script. <br>
![Script permissions]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-2.png" | relative_url}})
3. Bingo! I could edit the script. I used this script to list the contents of the `/root` directory. <br>
![List contents of root directory]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-3.png" | relative_url}}) <br>
![View output]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-4.png" | relative_url}})
4. I found `flag.txt`, so I used the cronjob to read its contents. <br>
![Read flag.txt]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-5.png" | relative_url}}) <br>
![VIew flag]({{"/assets/ctf/mmuctf-2026/General/cron-pulse-6.png" | relative_url}})

## Flag:
MMUCTF{cr0n_j0b5_4r3_dang3r0u5}