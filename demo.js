//normal function
function addition(){
    return 100+200;
}
console.log(addition());

//anonmous function
let addition1 = function(){
    return 300+400;
}
console.log(addition1());

let addtion2 = function(num1,num2){
    return num1+num2;
}
console.log(addtion2(700,800));

//arrow function
let addtion = (num1,num2)=>{
    return num1+num2;
}
console.log(addtion(1500,1600));

//simple line arrow function
let addtioon = (num1,num2)=>num1+num2;
console.log(addtioon(3100,3200));