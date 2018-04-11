pol = () => {console.log('I\'m alive!')};

const arr1 = [2, 4, 6, 8, 10];
const averager = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr1.reduce(averager % arr1.length));