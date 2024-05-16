//part 1 

const string = `ID, Name, Occupation, Age \n 42, Bruce, Knight, 41 \n 57, Bob, Fry Cook, 19 \n 63, Blaine, Quiz Master, 58 \n \
98, Bill, Doctor's Assistant, 26`;

let arry = [{id: 42, name: "bruce", occupation: "knight", age: 41},
            {id: 57, name: "bob", occupation: "fry cook", age: 19},
            {id: 63, name: "blaine", occupation: "quiz master", age: 58},
            {id: 98, name: "bill", occupation: "doctor's assistant", age: 26}];
        
//            let arrayOne = [1, 2, 3, 7];
//            const newArray = arrayOne.map((x => x + 2));
//            console.log(arrayOne, newArray);

//console.log(string.split('\n')[0].split(','))
//part 2 

function twoD (str){
    const new_arr = str.split('\n');
    const temp = [];
    
    for(let i = 0 ; i <= new_arr.length -1 ; i++){
        let item = new_arr[i];
        temp.push(item.split(','));
    };
    return temp;
};

console.log(twoD(string));

//part 3

const new_arr = [["ID", "Name", "Occupation", "Age"],
                   ["42", "Bruce", "Knight", "41"], 
                   ["57", "Bob", "Fry Cook", "19"], 
                   ["63", "Blaine", "Quiz Master", "58"], 
                   ["98", "Bill", "Doctor’s Assistant", "26"]];

/*
function fourD(new_arr_obj) {
    let keyz = new_arr_obj[0];
    let rarry = [];
    const newObj = {};
    for (let i = 1 ; i <= new_arr_obj.length -1; i++){
        let arrLength = new_arr_obj[i].length -1 
        for (let j = 0; j <= arrLength; j++){
            let key = keyz[j];
            let value = new_arr_obj[i][j];
            newObj[key] = value;
        }
         rarry.push(newObj);    

    }
    return rarry;
}

console.log(fourD(new_arr));
*/



function threeD (NewArr){
    //creates a new function
    let keys = NewArr[0]; //sets the key value equal to zero 
    let rArr = []; //when newarray is pushed then it doesn't overwrite the entire function by creating a new array 
    let obj = {};
    for (let i = 1; i <= NewArr.length -1 ; i++){ //when i is equal to one (skipping over the first line with the keys we want to use) and the new array length is greater than one and i is being incremented (+1)
        let arrLen = NewArr[i].length - 1; //setting the length of the array -1 (because index length =/= true length)
        for(let j = 0; j <=  arrLen ; j++ ){ //j is referenced as 0 because we need the keys to be the first line
         //creates a new object within the array 
        let key = keys[j];
        let value = NewArr[i][j];    
        obj[key] = value;

        }
        //console.log(NewArr[i])
        rArr.push(obj);
        obj = {};

    }
    return rArr;

}
console.log(threeD(new_arr));



//part 4 ;-;
const arryManip = [["ID", "Name", "Occupation", "Age"],
                   ["42", "Bruce", "Knight", "41"], 
                   ["57", "Bob", "Fry Cook", "19"], 
                   ["63", "Blaine", "Quiz Master", "58"], 
                   ["98", "Bill", "Doctor’s Assistant", "26"]];


console.log(arryManip.pop());

console.log(arryManip);

console.log(arryManip.push("7", "Bilbo", "None", "111"));