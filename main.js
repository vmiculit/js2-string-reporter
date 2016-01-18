var userWord = prompt("Enter any WORD:")



alert("You entered: " + userWord + "\n\n" + "Your word is " + userWord.length + " characters long." + "\n\n" + "Did you know that the character @ position 3 is: " + userWord.charAt(2) + "." + "\n\n" + "Also here is your word in lower case: " + userWord.toLowerCase() + " and in UPPER CASE: " + userWord.toUpperCase() + "." + "\n\n" + "Example: I have wanted " + userWord + " since I was a little boy." + "\n\n" + "Did you know that a sub-word of your word is: " + userWord.substring(1, 4) + "!")