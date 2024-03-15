
//question 2
let integer1 = 3//+prompt("Enter Any Number FOR INTEGER 1")
let integer2 = 3//+prompt("Enter Any Number FOR INTEGER 2")
if(integer1>integer2){
    document.write("the larger number is",integer1,"<br>")
}else if(integer2>integer1){
    document.write("the larger number is",integer2,"<br>")
}
else{
    document.write("the two integer is equal","<br>")
}
//question 3
let number = 5//+prompt("enter any number")
if (number>0){
    document.write("this number is positive","<br>")
}
else if(number<0){
    document.write("This number is negative","<br>")
}
else{
    document.write("your enter number is zero","<br>")
}
//question 4
let character = "a"
if(character=="a"||character=="e"||character=="i"||character=="o"||character=="u"){
    document.write("this is vowels","<br>")
}
else{
    document.write("this is not vowels","<br>")
}
//question 5
let correctPassword = "Ans@1234#"
let enterPassword ="Ans@1234#"// prompt("Enter the Password")
if(enterPassword===correctPassword){
    document.write("you enter the correct Password","<br>")
}
else if(!enterPassword){
    document.write("Plz enter Password","<br>")
}
else{
    document.write("you enter the Wrong Password","<br>")
}
let greeting;
let hour = 13
if(hour<18){
    greeting="Good day"
}
else{
    greeting="good evening"
}
document.write(greeting)