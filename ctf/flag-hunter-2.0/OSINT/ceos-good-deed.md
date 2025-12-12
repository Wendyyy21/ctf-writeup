---
layout: single
title: "CEO's Good Deed"
categories: [CTF, OSINT]
permalink: /ctf/flag-hunter-2.0/OSINT/ceos-good-deed/
---

## Description:
The CEO of Securium Solutions recently shared a post on their professional profile highlighting their involvement in a charitable initiative. While the post might look ordinary, sharp eyes will notice that it contains just enough breadcrumbs to trace the details.
Your task is to uncover the name of the charity they supported and identify the pincode of its location. <br>
Flag Format = HUNTER{Charity_Name-123456}

## Solution:
1. First, I used Google to search the CEO of Securium Solutions, which is Neha Singh. I found her LinkedIn profile as one of the results. 
2. I looked through her posts, and found this post a few months ago: [LinkedIn post](https://www.linkedin.com/posts/securiumsolutions_securiumsolutions-eldercare-humankindness-activity-7342903944706236417-6KI8) which shows the employees visiting an old age home. 
3. At the beginning of the video, there is a banner that shows the name and pincode of the charity. 

## Flag:

HUNTER{Apni_Sanskirti_Charitable_Foundation-201301}
