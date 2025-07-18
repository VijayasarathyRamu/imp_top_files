// function outerfunction(){
//     return `this is outerfunction`
// }
// console.log(outerfunction())

function outerfunction(){
    let count = 0;
    function innerfunction(){
        count++;
        console.log(count);
    }
    return innerfunction;//this line works closure
}
let count1 = outerfunction();

console.log(count1());
console.log(count1());
console.log(count1());
