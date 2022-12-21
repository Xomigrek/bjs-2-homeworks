// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i ++) {
    sum += arr[i];
    count ++;
    if ( min > arr [i]) {min = arr [i]};
    if ( max < arr [i]) {max = arr [i]};
  };
  let avg = + (sum / count).toFixed(2); 
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let a of arr){
    sum += a;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let arr of arrOfArr) {
    let sum = func(arr);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = - Infinity;
  let min = Infinity;
  for (let i of arr) {
    if (max < i) {
      max = i
    };
    if (min > i){
      min = i
    }
  }
  let gap = + Math.abs(max - min)
  return gap;
}
