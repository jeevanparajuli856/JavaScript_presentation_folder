a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
count = 0;
for (i = 0; i < 9; i++) {
    if (a[i] % 2 == 0) {
        count++;
    }
}
console.log(count, "number is divisible by 2 from given number")