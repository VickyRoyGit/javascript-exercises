const sumAll = function(num1, num2) {
    let sum=0;
    if((typeof num1 != 'number' || typeof num2!='number')  || (num1<0 || num2<0))
        return 'ERROR';
    else{
        while(num1!=num2){
            sum+=num1;
            num1<num2?num1++:num1--;
        }
        sum+=num1;
    }
    return sum;
};
// sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
