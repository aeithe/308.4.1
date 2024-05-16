// function threeD (NewArr){
//     //creates a new function
//     let keys = NewArr[0]; //sets the key value equal to zero 
//     let rArr = []; //when newarray is pushed then it doesn't overwrite the entire function by creating a new array 
//     let obj = {};
//     for (let i = 1; i <= NewArr.length -1 ; i++){ //when i is equal to one (skipping over the first line with the keys we want to use) and the new array length is greater than one and i is being incremented (+1)
//         let arrLen = NewArr[i].length - 1; //setting the length of the array -1 (because index length =/= true length)
//         for(let j = 0; j <=  arrLen ; j++ ){ //j is referenced as 0 because we need the keys to be the first line
//          //creates a new object within the array 
//         let key = keys[j];
//         let value = NewArr[i][j];    
//         obj[key] = value;

//         }
//         //console.log(NewArr[i])
//         rArr.push(obj);
//         obj = {};

//     }
//     return rArr;

// }
// console.log(threeD(new_arr));

let array1 = [12,["Alisa"]]

console.log(array1[1][0])