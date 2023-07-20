const repeatString = function(text,count) {
    let initLen=text.length;
    if (count<0)
        return 'ERROR';
    else if (count==0)
        return '';
    else if (count>0){
        while(--count>0)
            text=text.concat(text.slice(0,initLen));
        return text;
    }
};
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
