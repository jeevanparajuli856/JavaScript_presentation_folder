function apple() {
    console.log("apple is good for health")
    return 22;
}
a = apple()
console.log(a);
a = void apple(); //doesnot return the value
console.log(a);