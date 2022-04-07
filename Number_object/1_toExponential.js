a = new Number(22);
console.log(a.toExponential(2)); //only return the value doesnot set the value.
//arg inside above method is Optional. An integer between 0 and 20 representing the number of digits in the notation after the decimal point. If omitted, it is set to as many digits as necessary to represent the value
a = 22.1234;
console.log(a.toExponential(3));
console.log(a)