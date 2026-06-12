---
layout: single
title: "The Forbidden Path"
categories: [CTF, web]
permalink: /ctf/mmuctf-2026/Web/the-forbidden-path/
---

## Description:
You’re just a student wandering around MMU Melaka campus, killing time between classes. Nothing special, just another quiet day. <br>

While exploring the campus “system” everyone casually talks about, you notice there are certain instructions hidden in plain sight, like signs telling you where you’re “allowed” to go and how you’re supposed to behave. Some paths are obvious, some are tucked away like they don’t really want attention. <br>

Out of curiosity, you start following them. Every step feels normal at first just reading what’s given, adjusting how you present yourself, and checking places most people ignore. <br>

But the more you explore, the more it feels like the campus is quietly reacting to how you show up… almost like it’s paying attention to things it was never meant to care about. <br>

Now the question is simple: are you really just walking around MMU Melaka, or are you uncovering something the campus didn’t expect you to notice?

## Solution:
1. I accessed the webpage and viewed the source code but didn't find anything interesting.
2. I checked `robots.txt` and found something interesting. <br>
![robots.txt]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-1.png" | relative_url}})
3. The value of `Disallow` seemed to be a Base64 string. I decoded it and got `humans.txt.php/`.
4. I accessed this endpoint and saw this: <br>
![humans.txt.php]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-2.png" | relative_url}})
5. The picture of cookies indicated web browser cookies, so I checked my cookies and saw a cookie named `humans` with the value set to `false`. <br>
![cookies]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-3.png" | relative_url}})
6. I changed `false` to `true` and refreshed the page. <br>
![Next clue]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-4.png" | relative_url}})
7. I accessed `/library.php` but was told that my user agent is incorrect. <br>
![Wrong user agent]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-5.png" | relative_url}})
8. I intercepted my request in BurpSuite and changed the `User-Agent` to `S3cr3tAg3nt` (according to the `robots.txt` found earlier). Now, it says that I am not from `fistmmu.com`. <br>
![Wrong referer]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-6.png" | relative_url}})
9. I intercepted my request in BurpSuite again and added another header, `Referer: fistmmu.com`. <br>
![library.php]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-7.png" | relative_url}})
10. I accessed `/digital.php` and found a code execution textbox. <br>
![digital.php]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-8.png" | relative_url}})
11. I have solved a similar CTF challenge before where I can concatenate arbitrary commands with the given `ping` command using a semicolon (`;`). I used this technique to find and view the flag. <br>
![Found flag]({{"/assets/ctf/mmuctf-2026/Web/the-forbidden-path-9.png" | relative_url}})

## Flag:
MMUCTF{N1ce_0ne_M4n}