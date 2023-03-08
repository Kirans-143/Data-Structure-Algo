function mergeTwoArr(arr1, arr2) {
  let arr3 = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i];
      i++;
    } else {
      arr3[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < arr1.length) {
    arr3[k] = arr1[i];
    k++;
    i++;
  }
  return arr3;
}

let arr1 = [1, 9, 16, 24, 50, 60];
let arr2 = [5, 20, 27, 45];
console.log(mergeTwoArr(arr1, arr2));
