function maxSubarraySum(arr, num) {

  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length-num+1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

const result =maxSubarraySum([5,6,7,8,9,2,3,11],3)

console.log(result);