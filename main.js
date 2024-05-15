// Array
var fruits = ["Apple", "Orange", "Mango"];
console.log(fruits[0]);
// Array Value Update & Modifid
var fruit = ["Apple", "Orange", "Mango"];
fruit[0] = "grapes";
console.log(fruit);
// Array Used at Pop Method
var fruites = ["Apple", "Orange", "Mango"];
fruites.pop();
console.log(fruites);
// Array Used at Push Method
var frui = ["Apple", "Orange", "Mango"];
frui.push("grapes");
console.log(frui);
// Array Used at Shift Method
var fru = ["Apple", "Orange", "Mango"];
fru.shift();
console.log(fru);
// Array Used at Shift Method
var fr = ["Apple", "Orange", "Mango"];
fr.unshift();
console.log(fr);
// Array Used at Slice Method
var fruitese = ["Apple", "Orange", "Mango", "grapes"];
var sliceArray = fruitese.slice(1, 3);
console.log(sliceArray);
console.log(fruitese);
// Array Used at Splice Method
var fruiteses = ["Apple", "Orange", "Mango", "grapes"];
fruiteses.splice(1, 2);
console.log(fruiteses);
// Array Used at Splice Method & add more Fruites
var fruitie = ["Apple", "Orange", "Mango", "grapes"];
fruitie.splice(1, 2, "Peach", "Watermallon", "Lichi", "banana");
console.log(fruitie);
// Objects
var myCar = {
    brand: "toyota",
    model: 2023,
    varient: "1800cc",
};
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.varient);
// Object Value Reasine
myCar.varient = "2500";
console.log(myCar.varient);
// Object With Function
var myCars = {
    brand: "toyota",
    model: 2023,
    varient: "1800cc",
    start: function () {
        return "starting";
    }
};
console.log(myCars.start());
// Example using Object 
var student = {
    name: "Faryal Abbasi",
    email: "faryalabbasi88@gmail.com",
    rollno: 1234
};
// Used Array at Multiple Objects
var students = [
    {
        name: "Faryal",
        email: "faryalabbasi@gmail.com",
    },
    {
        name: "Zainab",
        email: "zainab@gmail.com",
    },
    {
        name: "Faiez",
        email: "faiez@gmail.com",
    }
];
console.log(students[1].name); //Purani Value
// Filtration Method 
console.log(students[1].name = "Raima"); // New Value
console.log(students);
var irfan = "03000";
var irfan2 = "030700";
console.log(irfan);
console.log(irfan2);
var studentes = "Faryal";
var teacher = "Zainab";
var rollno = 22245;
console.log(studentes);
console.log(teacher);
console.log(rollno);
