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
// scrpit 3
// يعنى ان لغة الجافا سكربت تقرأ اللغة سطر بسطر و اذا حدث خطأ فى سطر لا يقرأ السطر التالى
let num2= parseFloat(prompt('enter the number ?'))
// هذا السطر لن يعمل بسبب اسم المتغير غلط
console.log(`the number is:${num3}`)
// هذا السطر و اى سطر قدام لن يعمل لانه بعد سطر الخطأ
console.log('this line will not work')