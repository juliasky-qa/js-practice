function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    
    let rand = Math.random();

    if (rand < 0.33) {
      let charCode = Math.floor(Math.random() * 10) + 48;
      password += String.fromCharCode(charCode);

    } else if (rand < 0.66) {
      let charCode = Math.floor(Math.random() * 26) + 65;
      password += String.fromCharCode(charCode);

    } else {
      let charCode = Math.floor(Math.random() * 26) + 97;
      password += String.fromCharCode(charCode);
    }
  }

  return password;
}

console.log(generatePassword(8));

