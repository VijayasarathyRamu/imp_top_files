// function myvalue(data){
//     console.log(`my value is : ${data}`);
// }

// let mypromises = new Promise((resolve,reject)=>{
//     //producing code
//     let x = 0;
//     if(x===0){
//         // console.log("promise is solved")
//         resolve("Promise is Solved");
//     }else{
//         // console.log("promise is not solved")
//         reject("Promise is Solved");
//     }
// });
// // consuming code

// mypromises.then((value)=>{myvalue(value)},(error)=>{myvalue(error)});


function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Code is resolved')
        },2000);
    });
};
// getdata().then((result)=>{console.log(result)});

async function greeting(){
    let data = await getdata();
    console.log(data);
};
greeting();