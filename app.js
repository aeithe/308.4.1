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

const new_arr = [["ID", "Name", "Occupation", "Age"],
                   ["42", "Bruce", "Knight", "41"], 
                   ["57", "Bob", "Fry Cook", "19"], 
                   ["63", "Blaine", "Quiz Master", "58"], 
                   ["98", "Bill", "Doctor’s Assistant", "26"]];


function fourD(new_arr_obj) {
    let keyz = new_arr_obj[0];
    let rarry = [];
    const newObj = {};
    for (let i = 1 ; i <= new_arr_obj.length -1; i ++){
        let arrLength = new_arr_obj[i].length - 1 
        for (let j = 0; j <= arrLength; j ++){
            let key = keyz[j];
            let values = new_arr_obj[i][j];
            newObj[key] = values;
        }
         rarry.push(newObj);    

    }
    return rarry;
}

console.log(fourD(new_arr));

