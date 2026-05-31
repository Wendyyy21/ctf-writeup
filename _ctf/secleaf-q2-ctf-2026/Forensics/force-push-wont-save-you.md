---
layout: single
title: "force-push-wont-save-you"
categories: [CTF, forensics]
permalink: /ctf/secleaf-q2-ctf-2026/Forensics/force-push-wont-save-you/
---

## Description:
A developer force-pushed several times before the repository was archived. <br>
We suspect sensitive data may still exist somewhere in the project history. <br>
Some files may no longer be referenced. <br>
Flag Format: SecLeaf{}

## Solution:
1. First, I tried `cat .git/logs/HEAD` and found a commit hash with sensitive information. I checked out using this hash and found an `.env` file, but it only contains a fake flag. <br>
![Fake flag 1](images/force-push-wont-save-you-1.png)
2. Using `git fsck --lost-found`, I found a dangling commit and a dangling blob. I checked out using the dangling commit hash but found another fake flag. <br>
![Fake flag 2](images/force-push-wont-save-you-2.png)
3. Next, I tried the dangling blob but got ANOTHER fake flag. <br>
![Fake flag 3](images/force-push-wont-save-you-3.png)
4. I was running out of ideas so I tried to just search for the flag (`grep -R "SecLeaf{" .`). Luckily *(and surprisingly)*, I found the flag in `./.git/info/exclude`.

## Flag:
SecLeaf{history_was_the_trap}