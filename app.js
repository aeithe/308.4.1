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
function threeD (NewArr){
                    let keys = NewArr[0]
                    let rArr = []
                    const obj = {}
                    for (let i = 1; i <= NewArr.length -1 ; i++){
                        let arrLen = NewArr[i].length - 1
                        for(let j = 0; j <=  arrLen ; j++ ){
                        let key = keys[j]
                        let value = NewArr[i][j]    
                        obj[key] = value
                
                        }
                        //console.log(NewArr[i])
                        rArr.push(obj)
                    }
                    return rArr
                
                }
                console.log(threeD(new_arr))