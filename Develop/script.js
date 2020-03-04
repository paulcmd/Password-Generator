
// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomCharString = '';
var charSet = [
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        name: "Lowercase Letters",
        use: false

    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: false

    },
    {
        char: "0123456789",
        name: "Numbers",
        use: false

    },
    {
        char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: false
    },
];


//prompt user to pick a password length between 8 and 128 characters

function generatePassword() {
    var passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters "));
    var passwordString = '';

// check password length
    if (passwordLength >= 8 && passwordLength < 128) {
        charSet.forEach(set => {
            var useChar = (prompt('Do you want to use ' + set.name + '?  Choose y/n'));
            if (useChar === 'yes' || useChar === 'y') {
                set.use = true;
            }
            if (set.use) {
                randomCharString = randomCharString + set.char;
            }
            console.log(randomCharString);
        });
        console.log(JSON.stringify(charSet))
    } else {
        alert("Your password does not meet the required length");
        return null;
    }

    // generate random password based on user criteria

    if (randomCharString !== '') {
        for (var i = 0; i < passwordLength; i++) {
            passwordString = passwordString + randomCharString.charAt(Math.floor((Math.random() * Math.floor((randomCharString.length) - 1))));
        }
        return passwordString;

    } else {
        alert("You must use at least one character!");
        return null;

    }


}

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

