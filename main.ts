// Array
let fruits = ["Apple", "Orange", "Mango"]
console.log(fruits[0]);

// Array Value Update & Modifid
let fruit = ["Apple", "Orange", "Mango"]
fruit[0] = "grapes"
console.log(fruit);

// Array Used at Pop Method
let fruites = ["Apple", "Orange", "Mango"]
fruites.pop()
console.log(fruites);

// Array Used at Push Method
let frui = ["Apple", "Orange", "Mango"]
frui.push("grapes")
console.log(frui);

// Array Used at Shift Method
let fru = ["Apple", "Orange", "Mango"]
fru.shift()
console.log(fru);

// Array Used at Shift Method
let fr = ["Apple", "Orange", "Mango"]
fr.unshift()
console.log(fr);

// Array Used at Slice Method
let fruitese = ["Apple", "Orange", "Mango", "grapes"]
let sliceArray = fruitese.slice(1,3);
console.log(sliceArray);
console.log(fruitese);

// Array Used at Splice Method
let fruiteses = ["Apple", "Orange", "Mango", "grapes"]
fruiteses.splice(1,2)
console.log(fruiteses);

// Array Used at Splice Method & add more Fruites
let fruitie = ["Apple", "Orange", "Mango", "grapes"]
fruitie.splice(1,2, "Peach", "Watermallon", "Lichi", "banana")
console.log(fruitie);


// Objects
const myCar = {
	brand : "toyota",
	model : 2023,
	varient : "1800cc",
}
console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.varient);

// Object Value Reasine
myCar.varient = "2500"
console.log(myCar.varient);

// Object With Function
const myCars = {
	brand : "toyota",
	model : 2023,
	varient : "1800cc",
	start : () => {
		return "starting"
	}
}
console.log(myCars.start());


// Example using Object 
const student = {
	name : "Faryal Abbasi",
	email : "faryalabbasi88@gmail.com",
	rollno : 1234
}

// Used Array at Multiple Objects
const students = [
	{
		name : "Faryal",
		email : "faryalabbasi@gmail.com",
	},
	{
		name : "Zainab",
		email : "zainab@gmail.com",
	},
	{
		name : "Faiez",
		email : "faiez@gmail.com",
	}
]
console.log(students[1].name);        //Purani Value

// Filtration Method 
console.log(students[1].name = "Raima");   // New Value

console.log(students);

// Type Alias
type IrfanPappu = string 
type IrfanChintu = string
const irfan:IrfanPappu = "03000"
const irfan2: IrfanChintu = "030700"

console.log(irfan);
console.log(irfan2);


// Example at Type Alias
type studentes = string
type teacher = string
type rollno = number
const studentes:studentes = "Faryal"
const teacher:teacher = "Zainab"
const rollno:rollno = 22245

console.log(studentes);
console.log(teacher);
console.log(rollno);



