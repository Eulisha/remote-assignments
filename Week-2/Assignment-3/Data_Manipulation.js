function count(input){
    const arr = {};
    for (let item of input){
        if (arr[item] === undefined){
            arr[item]=1;
        } else{
            arr[item] = arr[item]+1;
        }
    }
    return arr;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));


function groupByKey(input){
    const arr1 = {};
    for (let item1 of input){
        if (arr1[item1.key]===undefined){
            arr1[item1.key] = item1.value;
        } else{
            arr1[item1.key] = arr1[item1.key] + item1.value;
        }
    }
    return arr1;
}
let input2 = [
    { key: "a", value: 3},
    { key: "b", value: 1},
    { key: "c", value: 2},
    { key: "a", value: 3},
    { key: "c", value: 5},
];
console.log(groupByKey(input2));