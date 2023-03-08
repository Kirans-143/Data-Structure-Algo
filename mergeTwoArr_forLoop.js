function mergeTwoArr(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
  }

  return arr3;
}

let arr1 = [1, 4, 8, 6, 9];
let arr2 = [11, 47, 85, 64];
console.log(mergeTwoArr(arr1, arr2));

console.log("*****************************");

//Merging with inbuilt jan=vascript function
console.log((arr4 = new Array(...arr1, ...arr2)));
