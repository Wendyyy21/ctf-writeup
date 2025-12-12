---
layout: single
title: "Blind Spot"
categories: [CTF, forensics]
permalink: /ctf/flag-hunter-2.0/Forensics/blind-spot/
---

## Description:
They told you everything sensitive was wiped clean. You ran your usual scans — nothing. But what if the secret isn’t gone… just hidden slightly out of sight? <br>
Flag Submission Rule All answers must be wrapped inside the HUNTER{...} format. <br>
Example: If you discover FLAG{abc_def}, then the correct submission is: HUNTER{FLAG{abc_def}}

## Solution:
1. We are given a zip file. Unzip it, and we get a docx file (`junk.docx`) and another zip archive (`files.zip`). 
2. A `.docx` file is also an archive, so convert it into a .zip file and extract its contents. 
3. Navigate to the `word` directory, then to the `media` directory, and we see an image. Open it, and the flag is in the image.

## Flag:
HUNTER{FLAG{HooRay_you_fOund_tHis}}