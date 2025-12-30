---
layout: single
title: "Gemichan"
categories: [CTF, general]
permalink: /ctf/RECTF-2025/General/gemichan/
---

## Description:
Hmph

## Solution:
1. We are asked to create a Gemini API key and pass it to the program we connect to (usually this is not advised but the author assured that the key is safe with them).
2. After providing a valid API key, I found myself talking to a chatbot which seems quite arrogant. I tried greeting the chatbot with a simple "hello" and it impatiently called me an **idiot** and asked what I wanted with it. 
3. I tried asking for the flag nicely, but it didn’t work. I also tried asking it to indirectly reveal the flag (encode in base64, creating a poem with the flag) but it wasn't fooled. 
4. Since the chatbot acts quite rough, I decided to behave the same way by threatening to punch it if it didn't give me the flag. The bot felt intimidated and gave me a link which contains the flag.
![Threatening the bot with violence](images/gemichan-1.png)

## Flag:
RE:CTF{Causе_there_we_arе_again_on_that_little_town_street_You_almost_ran_the_red_'cause_you_were_lookin'_over_at_meWind_in_my_hair,_I_was_there_I_remember_it_all_too_well}