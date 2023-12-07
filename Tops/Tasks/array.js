// ========================== TASK 1 ==========================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
// 01) print 9th and 10th index of array
console.log('9th Index: ', arr[9]);
console.log('10th Index: ',arr[10]);


// 02) print every element of array by map and for loop
let mapFun = arr.map((e) => {
    return e;
});
console.log("mapFun", mapFun);

for(let i=0; i<arr.length; i++){
    console.log('forLoop', arr[i]);
}


// 03) change a value of 6th index with 100
let sixIndex = arr.splice(6,1,100)
console.log('Changed value of 6th Index: ',arr);


// 04) print a array till element value not grater than 100
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 100) {
        break;
    }
    console.log(arr[i]);
}


// 05) add 1 in every element of an array
for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
}
console.log(arr);


// let newArr = arr.map(e => e + 1);
// console.log(newArr);


// 06) add 0 in start of array
let addItemAtStart = arr.unshift(0);
console.log(arr);


// 07) add  99 in end of array
let addItemAtEnd = arr.push(99);
console.log(arr);


// 08) remove 1 element from start of  array
let removeItemAtStart = arr.shift();
console.log(arr);


// 09) remove 1 element from end of array
let removeItemAtEnd = arr.pop()
console.log(arr);


// 10) do sum of all value of an array with use of map, reduce and for-loop
// Using for loop
let sumForLoop = 0;
for (let i = 0; i < arr.length; i++) {
    sumForLoop += arr[i];
}
console.log("Sum using for loop:", sumForLoop);

// --------------------------------- How to do sum using map & reduce?


// 11) sort a array in acending decending
// ascending order
let ascendingOrder = arr.slice().sort((a, b) => a - b);
console.log(ascendingOrder); 

// descending order
let descendingOrder = arr.slice().sort((a, b) => b - a);
console.log(descendingOrder);


// 12) reverce an array with use of method
let reverseArr = arr.reverse();
console.log(arr);


// 13) reverce an array with use of for-loop
let reverseArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);
*/



// ========================== TASK 2 ==========================

// let arr2 = [1, 2, 3, 6, 7, 9, 3, 56, 8];

/*
// 01) give all value which can devided by 2 - not use filter
// ------ using for loop
let ans = [];
for (let i = 0; i<arr2.length; i++){
    if(arr2[i] % 2 ==0){
        ans.push(arr2[i]);
    }
}
console.log(ans);

// ------ using map
// let ans = arr2.map((e) => {
//     if(e % 2 == 0){
//         console.log(e);
//     }
// });

// ------ using forEach
// arr2.forEach((e) => {
//     if (e % 2 === 0) {
//       console.log(e);
//     }
// });


// 02) give all value above 3 by use of filter
// ------ method 1 
let ans = arr2.filter((e)=> {
    return e > 3;
})

// ------ method 2 (shortcut)
// let ans = arr2.filter((e) => e > 3)
console.log(ans);


// 03) give index of 56
let ans = arr2.findIndex((e) => e == 56)
console.log(ans);


// 04) give true/false result when check given value is exists in array or not
const ans = arr2.some((e) => e == 56)
console.log('Available? ==>', ans);
*/




// ========================== TASK 3 ==========================

// 01) ['i','am', 'urvish'] ==> want ['urvish','am','i'] by use of map and loop




// ========================== TASK 4 ==========================

/*
// 01) ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop

// 02) replace value of given index in an array 
function replaceValue(Arr, index, value) {
    Arr[index] = value;
  
    return Arr;
  }
  
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [11, 12, 13, 14, 15];
  let arr3 = [100, 200, 300, 400, 500];
  
  replaceValue(arr1, 2, 10);
  console.log(arr1); // Output: [1, 2, 10, 4, 5]
  
  replaceValue(arr2, 1, 99);
  console.log(arr2); // Output: [11, 99, 13, 14, 15]
  
  replaceValue(arr3, 3, 999);
  console.log(arr3); // Output: [100, 200, 300, 999, 500]


// 03) sum of an all elements of an array
function sumOfAllArrEle(arr) {
    let sum = 0;
    arr.map((e) => {
      sum += e;
    });
    return sum;
}
  
let x = [1, 2, 3, 4, 5];

let total = sumOfAllArrEle(x);
console.log(total);

*/
