/*To view console (Inspect + click console)*/

/*.log used to print to the console*/
console.log("The start of JavaScript.");
/* \n adds a line on the console */
console.log("\n");

/*Creates an alert box within window*/
window.alert("Testing alert box...");

/*Variables*/
/*(Declaration : var, let, const) (name) = (input)*/
let day;
day = 6;
console.log("Day: " + day);

let month = 3;
console.log("Month: " + month);
console.log("\n");

/* User input */
/* Window-box input */
let username = window.prompt("Enter username :");
console.log("Entered username :", username);
console.log("\n");

/* Data types */
/*Num : Numbers*/
let age = 21;
age = age + 1;

/*, & + used to add additional items*/
console.log("(Num) Age :", age);

/*String : Characters*/
let name = "BRYAN";
console.log("(String) Name :" + name);

/*Boolean : True/False*/
let student = false;
console.log("(Boolean) Student :" + student);
console.log("\n");

/* Data type conversion */
let a;
let b;
let c;

a = Number(3.14);
b = String(3.14);
c = Boolean(3.14);

/*typeof shows which type*/
console.log("Type is :", typeof a);
console.log("Type is :", typeof b);
console.log("Type is :", typeof c);
console.log("\n");

/* Arithmetic expressions (JS operates under BIDMAS")*/
let value1 = 10;
value1 = value1 + 3;
console.log("Added :", value1);
value1 = value1 - 3;
console.log("Subtract :", value1);
value1 = value1 * 3;
console.log("Times :", value1);
value1 = value1 / 3;
console.log("Divid :", value1);

/* Remainder */
value1 = value1 % 4;
console.log("Remainder :", value1);
console.log("\n");

/* Reassigning variable */
let value2 = 5;
value2 += 1;
console.log("Added value :", value2);
value2 -= 2;
console.log("Subtracted value :", value2);
value2 *= 2;
console.log("Timed value :", value2);
value2 /= 3;
console.log("divided value :", value2);
console.log("\n");
