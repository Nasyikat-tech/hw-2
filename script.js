//1.
//let line = "ddd@bbb@ccc";
//let newline = line.replace(/@/gi, "!");
//document.write(newline);
//2.
//let line = "js";
//document.write(line.toUpperCase());
//3.
//let line = "JS";
//document.write(line.toLowerCase());
//4.
//let line = "I am a hero!";
//console.log(line.length);
//5.
let cardNumber = prompt("ВВедите номер карты?");
let result = cardNumber.slice(10, 14);
document.write("**********" + result);
