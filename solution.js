function find_average(arr){
const averager = (accumulator, currentValue) => accumulator + currentValue;
return arr.reduce(averager) / arr.length;
};