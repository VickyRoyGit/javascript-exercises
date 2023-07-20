const leapYears = function(yearNum) {
    let resBool=(yearNum%100==0)?
        (yearNum%400==0):(yearNum%4==0);
    return resBool;
};

// Do not edit below this line
module.exports = leapYears;
