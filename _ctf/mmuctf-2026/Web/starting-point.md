---
layout: single
title: "starting-point"
categories: [CTF, web]
permalink: /ctf/mmuctf-2026/Web/starting-point/
---

## Description:
Missconfiguration

## Solution:
1. I accessed the webpage and only saw a white page with a ghost emoji followed by the text "Goodluck Hacker!!". I viewed the source code but didn't find anything interesting.
2. I opened the network tab in the browser dev tools and refreshed the page. I found the flag in one of the HTTP headers in the response. <br>
![Got flag]({{"/assets/ctf/mmuctf-2026/Web/starting-point-1.png" | relative_url}})

## Flag:
MMUCTF{bl4nk_wh1t3_p4g3_h34d3r_fl49}