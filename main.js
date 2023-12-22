//const a =1; 

//console.log(a);

//let- whenever you want to define a variable whose value is changing 


let firstName= "Kush";
let age= "23";
let isMarried= true;

console.log("This person's name is " + firstName + " and their age is " + age)



//If else statements 
if(isMarried == true) {
    console.log(firstName + " is married");
} else{
    console.log(firstName + " is not married");
}


//loops 

//WAP that counts from 0-1000 and prints 
//UGLY WAY- 

let answere=1+2+3+4+5+6; 
console.log(answere);

//GOOD WAY- using loops 
let answer= 0;
for (let i = 0 ; i<=1000; i++){
    answer= answer +i;
}

console.log(answer);

//arrays

const ages= [21, 22, 23, 24, 25];
for (let i = 0; i<ages.length; i++){
    if(ages[i]  %2 == 0){
        console.log(ages[i]);
    }
}

//WAP to print biggest no. in array. 

//WAP that prints all the male people's 
const personArray=["ram", "kush", "priya"]
const genderArray= ["male", "male", "Female"]

for(let i= 0; i<personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
}
}

//array of strings, const done 
//Now array of objects-> 

//const allUsers= [{
   
//}]


//FuncTions: 

function findSum(a, b){
    //do things with the input and return an output
    return a + b;
}

const value= findSum(1, 2)
const value2= findSum(1, 10)
console.log(value);
console.log(value2);

//Functions Can take other functions as input i.e CALLBACKS
//setTimeout


asdbnaskdbnasnbdkjasnbdjklnasd