const fibonacci = function (n) {
  // let arr = [0,1]
  // for(let i =2; i< n + 1; i++){
  //     arr.push(arr[i-2] + arr[i-1])
  // }
  // return arr[n]

  // if(n < 2){
  //     return n
  // }
  // return fibonacci(n-1) + fibonacci(n -2)

  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
