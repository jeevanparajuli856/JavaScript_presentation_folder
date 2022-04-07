a = new Array("hundyai", "audi", "kia", "MG", "3");
console.log(a.splice(0, 2)) //0 dekhi 2 ota element hata which made to include 0 and 1
    //array.splice(index, howmany, item1, ....., itemX) howmany and items are optional
console.log(a)
b = [2, 5, 4, "0", '1', 3, 22, 100]
console.log(b.splice(1, 3, "apple", "ball")) //index 1 (incluidng 1) dekhi 3 ta hata and add the given element from or 1. 
console.log(b);