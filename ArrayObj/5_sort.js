a = new Array("hundyai", "audi", "kia", "MG", "3");
console.log(a.sort()); //Number comes first then capital A-Z come  then a-z
console.log(a) //change the original array
a = [2, 5, 4, "0", '1', 3, 22, 100] //both string number and only number is regard as same
    // while sorting 100 comes first than 2 ,3 or other since 1 comes first than other. And sorting function regard 1 letter of string or number
console.log(a.sort())