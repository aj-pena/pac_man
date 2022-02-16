
<!-- Modularizing did not work unless it was run from a live local server. -->
Regarding modularizing the code so that Class Ghost lives in a separate file Ghost.js that is imported into index.js:

Solution:

Right click the index.html file in Visual Studio Code, select Open with Live Server.
This will fix your issue.


! Explanation: 

Exports/Imports in JS only work on servers, they DO NOT work on local machines (there is a different code for that).
Here is how to do it, step by step instructions.
