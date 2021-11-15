# CSE 110 (Fall 2021) Lab 8
Jack Yang

1. I will fit my automated tests in Recipe project development pipeline within a Github action that runs whenever code is pushed. In this case, we can guarantee that every push will be tested automatically. This helps lower the possibility that the whole project will not run eventually. 
2. No. 
3. No. Message feature includes writing and sending a message to another user. Unit testing usually tests on a small part of the code, e.g., a function, but it does not work when there are multiple functions. 
4. Yes. The message length can be easily found and tested. To test it, we just need to set up different limits for messages. 