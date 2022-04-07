a = new Date()
console.log(a.getDate()) //return the day of months for specific date
a = new Date("july 21, 1983");
console.log(a.getDate())
a = new Date("2021 august 24");
console.log(a.getDate())
a = new Date("2021 aug 3");
console.log(a.getDate())
a = new Date("2022/02/5");
console.log(a.getDate())
a = new Date("2022-2-7");
console.log(a.getDate())