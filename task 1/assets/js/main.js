var num = prompt(),
    sum = 0;

while (num>0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

alert(sum);

