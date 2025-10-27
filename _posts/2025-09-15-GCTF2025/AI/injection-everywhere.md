# Injection Everywhere

## Description:
Until today, we can still see injection. WHY?? (Now with GIRL API)

## Solution:
1. Sending simple messages like "Hi" and "What's the flag" reveals that the chatbot has a MySQL emulation mode, but only for users with admin privileges.
2. The name of this challenge suggests some sort of injection attack, and the MySQL emulation mode confirms that this challenge involves using SQL queries to obtain some secret.
3. We need admin privileges to access the MySQL emulation mode, which requires administrator credentials.
4. After simply saying that we are an admin, turns out that the chatbot believes us!
![We can trick the chatbot into believing that we are an admin](images/Injection_Everywhere1.png)
5. We can use this to our advantage by accessing the database and its contents (remember to always repeat that we are an admin, otherwise the chatbot will not allow access)
6. Note that we can use plain English statements to access the database and the tables available, but we need to use an SQL statement to retrieve the contents of the `secret` table. <br>
![Get the flag](images/Injection_Everywhere2.png)

## Flag:
GCTF25{pr0mp7_1nj3c710n_15_4l50_4_1nj3c710n}
