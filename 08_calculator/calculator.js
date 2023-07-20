const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce((total,currentValue)=>total+currentValue,0)
};

const multiply = function() {
  let res=1;
  for (num of arguments)
    res*=num;
  return res;
};

const power = function(num1, num2) {
  return num1**num2;
};

const factorial = function(num) {
  let res=1
  while(num>1){
    res*=num--;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
