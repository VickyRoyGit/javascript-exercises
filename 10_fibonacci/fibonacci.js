const fibonacci = function(nth) {
    if(nth<1)
        return 'OOPS';
    let fib1=0;
    let fib2=1;
    let swap=0;
    let i=1;
    while(++i<=+nth){
        swap=fib2;
        fib2=fib2+fib1;
        fib1=swap;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
