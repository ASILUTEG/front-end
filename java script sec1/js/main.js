// script 1 for Radius of the circle

// step 1 -take radius
let radius = parseFloat(prompt('enter the Radius?'))
// step 2- make calculation
let circul=Math.PI * Math.pow(radius,2)
// step 3- print result
console.log(`the circumference of a circle is : ${circul}`)




//script 2 even and od
// take the Number
let num= parseFloat(prompt('enter the number ?'))
//check if the number is even
if(num % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}




//script check age 
// take your age
let age= parseFloat(prompt('enter the age ?'))
//check if the age is ok
if(age >= 18) {
    console.log("You can signup");
}
// else not ready yet
else {
    console.log("no You are under age");
}





// scrpit 3
// يعنى ان لغة الجافا سكربت تقرأ اللغة سطر بسطر و اذا حدث خطأ فى سطر لا يقرأ السطر التالى
let num2= parseFloat(prompt('enter the number ?'))
// هذا السطر لن يعمل بسبب اسم المتغير غلط
console.log(`the number is:${num3}`);
// هذا السطر و اى سطر قدام لن يعمل لانه بعد سطر الخطأ
console.log('this line will not work');

let day_num = parseFloat(prompt("Enter Number Between 1 , 7"));
var day_name;
day_num===1 ? day_name="Saturday":day_num===2 ? day_name="Sunday":day_num===3 ? day_name="Monday":day_num===4 ? day_name="Tuesday":day_num===5 ? day_name="Wednesday":day_num===6 ? day_name="Thursday":day_num===7 ? day_name="Friday":day_name="Invalid Number "
console.log(`You Day is : ${day_name}`);