function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {

    tempSum = tempSum - arr[i - num] + arr[i];

    
     console.log(`maxsum --- ${ maxSum}---> tempsum---> ${tempSum} `)
   
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let result =maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
console.log("hello");
console.log(result);