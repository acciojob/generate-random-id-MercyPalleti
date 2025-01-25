function makeid(l) {
  // write your code here
	/* const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < l; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;*/
	let result = '';
    for (let i = 0; i < l; i++) {
        const randomAscii = Math.floor(Math.random() * 62); // 62 possible characters (26 upper, 26 lower, 10 digits)

        if (randomAscii < 26) {
            // Uppercase letters (ASCII 65-90)
            result += String.fromCharCode(65 + randomAscii);
        } else if (randomAscii < 52) {
            // Lowercase letters (ASCII 97-122)
            result += String.fromCharCode(97 + randomAscii - 26);
        } else {
            // Numbers (ASCII 48-57)
            result += String.fromCharCode(48 + randomAscii - 52);
        }
    }
    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
