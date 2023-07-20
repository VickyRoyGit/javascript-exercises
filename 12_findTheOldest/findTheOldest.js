const findTheOldest = function(arr) {
    let reducedPerson=arr.reduce(
        (reducer,item)=>{
            const currDate=new Date();
            const currYear=currDate.getFullYear();
            calcAge=(item.yearOfDeath?item.yearOfDeath:currYear)-item.yearOfBirth;
            reducedAge=(reducer.yearOfDeath?reducer.yearOfDeath:currYear)-reducer.yearOfBirth;
            if(calcAge>reducedAge)
                reducer=item;
            return reducer;
        })
    return reducedPerson;
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,

    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people).name;
// Do not edit below this line
module.exports = findTheOldest;
