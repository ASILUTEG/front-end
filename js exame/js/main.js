// ===========q1


// ===========q2
setTimeout(()=>{
    console.log("Hello World !");
}, 3000);
setTimeout(()=>{
    console.log("Hello World !");
}, 0);
    console.log("Hello World !");
// will run  form 3 to 2 to 1
// ============q3
var array = [30, 50, 6];
console.log(Math.max(...array));
// =============q4
const date1 = new Date('1/1/2021');
const date2 = new Date('1/8/2021');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffDays + " days");
// ==============q5


//================q6
function getFirstValue(FirstValue){
    return FirstValue;
}
function getSecondValue(SecondValue){
    return SecondValue;
}

function getValues() {
    return {
        first: getFirstValue(),
        second: getSecondValue(),
    };
}

//=============q7
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
}
 
reverseString("ali");
//===============q8
var obj = {"1":"ali","2":"aymen"}
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
console.log(result);