---
layout: single
title: "The Invoice Incident"
categories: [CTF, general]
permalink: /ctf/secleaf-q2-ctf-2026/General/the-invoice-incident/
---

## Description:
At 09:14 AM, a finance employee reported receiving an urgent invoice email. Shortly after, suspicious activity began on the host. <br>
You have been provided mail and endpoint logs collected during the incident. <br>
Analyze the logs carefully, determine the malicious attachment responsible for the compromise, and submit the flag.

## Solution:
1. We are given three files: two log files and a csv file. From `endpoint_events.log`, I found that `WINWORD.EXE` started powershell and established a connection. I also found the name of the malicious attachment. <br>
![Endpoint events log]({{"/assets/ctf/secleaf-q2-ctf-2026/General/the-invoice-incident-1.png" | relative_url}}) <br>
2. However, I decided to check the other files to verify the filename before submitting the flag. In `mail_gateway.log`, I found only one entry with an attachment from micr**0**soft-support (a strong indicator of phishing!). The filename matches the one found earlier. <br>
![Mail gateway log]({{"/assets/ctf/secleaf-q2-ctf-2026/General/the-invoice-incident-2.png" | relative_url}}) <br>
3. In `easy_logs.csv`, I found that the user opened the invoice document using WINWORD.EXE, which spawned powershell and established a reverse shell back to the attacker’s IP. This confirms the filename found in the other files. <br>
![Easy logs]({{"/assets/ctf/secleaf-q2-ctf-2026/General/the-invoice-incident-3.png" | relative_url}}) <br>

## Flag:
SecLeaf{Invoice_April_2026.docm}