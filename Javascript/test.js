function convertToCelsius(tempInf){
    tempInC = ( tempInf -32 ) * 5/9;
    return tempInC
}

console.log( convertToCelsius(212) );

var person = {
    fName: "Sally",
    lName: "Jones",
    age: 30,
    location: "New York City",
    fullName: function(){
        return person.fName + " " + person.lName;
    }
}

console.log( person.fullName() );

let randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 0.25) {
    console.log("The random number is between 0 and 0.25");
} else if (randomNumber >= 0.25 && randomNumber < 0.5) {
    console.log("The random number is between 0.25 and 0.5");
} else if (randomNumber >- 0.5 && randomNumber < 0.75) {
    console.log("The random number is between 0.5 and 0.75");
} else {
    console.log("The random number is greater than 0.75 and less than 1");
}

var fruit = "Orange";
switch (fruit) {
    case "Banana":
    console.log("Bananas are yellow");
    break;
    case "Orange":
    console.log("Oranges are orange");
    break;
    case "Lime":
    console.log("Limes are green.");
    default: 
    console.log("Sorry, I don't know what color that fruit is.");
}

randomNumber = Math.floor((Math.random() *10));
console.log(randomNumber);
 //randomNumber = 11;
switch (randomNumber) {
    case 0:
    case 1:
    case 2:
    console.log(`The random number is ${randomNumber}.`);
    //break;
    case 3:
    case 4:
    case 5:
    case 6:
    console.log("The random number is is between 3 and 7.");
    //break;
    case 7:
    case 8:
    case 9:
    case 10:
    console.log("The random number is greater than 7.");
    //break;
    default:
    console.log("Something went wrong...");

}

for (let i = 0; i <= 100; i++) {
    console.log(i);
}