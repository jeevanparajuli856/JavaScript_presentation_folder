//instanceof operator
e = { make: 'Honda', model: 'Accord', year: 1998 };
console.log(e instanceof Object) // check the type of object it return false if you check for primitive data type.
console.log(e instanceof Array)
console.log(e instanceof String)
    //check for array
f = ["apple", "ball", "cat"]
console.log(f instanceof Array)
console.log(f instanceof Object)
    //check for string object.
g = new String("apple");
console.log(g instanceof String);