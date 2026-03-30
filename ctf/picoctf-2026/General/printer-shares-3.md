---
layout: single
title: "Printer Shares 3"
categories: [CTF, general]
permalink: /ctf/picoctf-2026/General/printer-shares-3/
---

## Description:
I accidentally left the debug script in place… Well, I think that's fine - No one could possibly access my super secure directory.

## Solution:
1. First, I listed the available SMB shares. <br>
![Listing SMB shares](images/printer-shares-3-1.png) <br><br>
2. Then, I connected to the public share and downloaded the available files. <br>
![Connecting to public SMB share](images/printer-shares-3-2.png) <br><br>
3. A Bash script prints the text "Health Check:" followed by the current date and time. Since the script is executed every minute, it can be used to perform malicious actions, such as revealing the flag. 
4. Since I can download and upload files to the public share, I could alter the script to help me retrieve the flag. The plan: modify the script, upload it to the public share, wait for the script to execute at the next minute, download the relevant files.
5. First, I listed the contents of the parent directory to check the correct path to the private share. <br>
![ls ../ > parent.txt](images/printer-shares-3-3.png) <br><br>
6. After confirming the path to the private share, I listed the contents of the private share. <br>
![ls ../secure-shares/ > private.txt](images/printer-shares-3-4.png) <br><br>
7. Lastly, I copied the contents of the flag file from the private share to the public share. <br>
![cp ../secure-shares/flag.txt > flag.txt](images/printer-shares-3-5.png)

## Flag:
picoCTF{5mb_pr1nter_5h4re5_r3v3r53_0eb29140}