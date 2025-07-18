function fun1(){
    console.log("hi");
}
function fun2(){
    setTimeout(()=>{
        console.log("hello");
    },3000)
    
}
function fun3(){
    console.log("everyone");
}

fun1();
fun2();
fun3();