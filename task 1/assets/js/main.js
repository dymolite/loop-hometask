/* let num = prompt();
let sum = 0;

while () {
  
let a = num % 10;
let b = ((num-a)/10) % 10;
let c = (((num-a) / 10  -b) / 10) % 10;
let d = (((num - a)/10 - b)/ 10 -c) / 10;

let sum= a + b + c + d
}

prompt( sum);
 */

var num = prompt(),
    sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

alert(sum);

