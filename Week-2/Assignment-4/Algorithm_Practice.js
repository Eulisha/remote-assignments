function binarySearchPosition(numbers,target){
    const halfNum = numbers => {
        if (numbers.length%2 ===0){ //偶數
            return numbers.length/2;
        } else{ //基數
            return (numbers.length+1)/2;
        }
    }
    let leftInd = 0;
    let rightInd = numbers.length -1;
    let midInd = halfNum(numbers) -1;
    const oriNumbers= [...numbers];
    
    while (leftInd < rightInd){
        console.log(numbers);
        console.log(oriNumbers);
        console.log(midInd);
        if ( oriNumbers[midInd] === target){
            return midInd;
        }
        else if ( oriNumbers[midInd] > target){
            rightInd = midInd-1;
            numbers.splice(midInd, midInd+1);
            midInd = midInd - halfNum(numbers);
        }
        else {
            leftInd = midInd+1;
            numbers.splice(0, midInd+1);
            midInd = midInd + halfNum(numbers);
        }
    }
}

console.log(binarySearchPosition([1,2,5,6,7],1));
console.log(binarySearchPosition([1,2,5,6,7],6));