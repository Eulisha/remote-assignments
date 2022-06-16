function max(numbers){
    let maxNum = 0
    for (const n of numbers){
        if (n > maxNum){
            maxNum = n;
        }
    }
    return maxNum;
}
function findPosition(numbers,target){
    for (const m of numbers){
        if (m === target){
            let index = numbers.indexOf(m);
            return index;
        }
    }
    return -1;
}

console.log(max([1 ,2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]))

console.log(findPosition([5, 2, 7, 1, 6], 5));
console.log(findPosition([5, 2, 7, 1, 6], 7));
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7));
console.log(findPosition([5, 2, 7, 1, 6], 8));