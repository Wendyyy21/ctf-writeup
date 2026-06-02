---
layout: single
title: "Printer Shares"
categories: [CTF, general]
permalink: /ctf/picoctf-2026/General/printer-shares/
---

## Description:
Oops! Someone accidentally sent an important file to a network printer—can you retrieve it from the print server?

## Solution:
1. First, I listed the available SMB shares. <br>
![Listing SMB shares]({{"/assets/ctf/picoctf-2026/General/printer-shares-1.png" | relative_url}}) <br>
2. Then, I connected to the public share and downloaded the flag file. <br>
![Connecting to public SMB share]({{"/assets/ctf/picoctf-2026/General/printer-shares-2.png" | relative_url}})
![Downloading flag file]({{"/assets/ctf/picoctf-2026/General/printer-shares-3.png" | relative_url}})

## Flag:
picoCTF{5mb_pr1nter_5h4re5_b3f2f855}