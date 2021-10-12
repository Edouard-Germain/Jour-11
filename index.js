// Exercie 01 

//var fs = require("fs")

//fs.readFile("jour07.txt", function (err, data){
  //  if (err){
    //    console.error(err)
      //  return
    //}
    //console.log(data.toString())
//})

//fs.writeFile("jour07.txt", "salut les potes ! Ca gaze ?", function(err){
  //  if(err){
    //    return console.error(err)
    //}
    //fs.readFile("jour07.txt", function (err, data) {
      //  if (err) {
        //   return console.error(err);
        //}
  
        //console.log(data.toString());
     //})
//})

//fs.unlink("jour07.txt", function(err){
    //if (err){
    //    return console.log(err)
         
  //  }
//})

// Exercice 02 

var array = [ 1, 2, 3, 4, 5]

var double = array.map(function(num){
    return num *2

})

console.log(double)

// Exercice 03

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(longName){
    var fullName = {
        name: longName.firstName + longName.lastName,
    }
    return fullName
})
console.log(shortNames)


// Exercice 04

var array = [1,"toto",34,"javascript",8]

var numbers = array.filter(function(num){
    return typeof(num)== 'number'
})
console.log(numbers)

// Exercice 05 

var numbers = [1, 2 , 3, 4, 5, 6, 7, 8]
var even = numbers.filter(function(num){
    return num % 2 === 0
})

console.log(even)


/// Exercice 06 

var cake = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
////////////////////////////////////////////////
var cakeChoco = cake.filter(function(taste){
    return taste.flavor === "chocolate"

}).map(function(taste){

    var caskeSoldout = {
        name: taste.name,
        flavor: taste.name,
        status : " Sold out"
    }
    return caskeSoldout
})

console.log(cakeChoco)
/////////////////////////////////////////////////

/// Bonus ////

