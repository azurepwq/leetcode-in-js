/**
 * @param {number} n
 * @return {boolean}
 */

// Method 1
var isHappy = function(n) {
  return n <= 4? n === 1: isHappy(getSum(n));
};

const getSum = n => {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }

  return sum;
}