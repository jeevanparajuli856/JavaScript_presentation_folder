//in operator
d = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('model' in d)
delete d.model
console.log('model' in d)