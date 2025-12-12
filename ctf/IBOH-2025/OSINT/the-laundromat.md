---
layout: single
title: "The Laundromat"
categories: [CTF, OSINT]
permalink: /ctf/IBOH-2025/OSINT/the-laundromat/
---

## Description:
CryptoEx, a cryptocurrency exchange under investigation for fraudulent activity, scammed a victim, StarDreamer out of their cryptocurrency holdings. The stolen funds were moved through multiple wallet addresses by CryptoEx to obscure the money trail. <br>

Your task: Track the complete money flow from the starting address to the final destination. Count the number of addresses that CryptoEx used (excluding the starting address given below), then identify the final destination wallet. <br>

Starting wallet address: 0x45A14EA9426c0542998730A5C58c5C82fE02fb72 <br>

Flag Format: BOH25{numberOfCryptoExAddresses_finalWalletAddress} (Case Sensitive) <br>


## Solution:
1. Search for the given wallet address on etherscan. 
2. Track the transactions one by one until you encounter an account where there are no outgoing transactions. 
3. Count the number of accounts the cryptocurrency was transferred through.  <br>
Note: at one point, the funds are transferred to 2 different accounts then transferred to the same account again. Only distinct accounts should be counted.

## Flag:

BOH25{5_0x2221754606f6743537a805b097B40F8eBBDC9Db0}
