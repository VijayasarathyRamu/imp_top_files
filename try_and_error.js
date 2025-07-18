// try{
//     let res = 10/0;
//     console.log("result: ",res);
//     throw new Error("something went wrong");
// }catch (error){
//     console.error("Error Message: ",error.message);
// }

// try{
//     let x = 12;
//     if(x===121){
//         console.log("yeah is right");
//     }
//     throw Error("something went wrong");
// }catch (error){
//     console.error("Error Message: ",error.message);
// }

try{
    let x = '112';
    // if(x==='112'){
    //     console.log("yeah is right");
    // }
    // throw Error("something went wrong");

    if(isNaN(x)){
        console.log("yes is right");
    }
    throw Error("x do not have number data type");

    if(x<6){
        console.log("yeah is right");
    }
    throw Error("is not a nmber");
}
catch (error){
    console.error("Error Message: ",error.message);
}