function* a(n) {
    while (n < 20) {
        console.log(n++)
        yield n;
    }
}
b = a(1);
console.log(b.next())
console.log(b.next())