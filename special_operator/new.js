//new
function apple(vehicle, brand) {
    this.name = vehicle; //the this keyword refers to an object.
    this.brand = brand;
}
e = new apple("car", "honda"); //creates an object.
console.log(e)
f = new Date(2);
console.log(f);
console.log(typeof f)