// Goal: add logic to transform list of numbers into an object
// result should be [{val: 1}, {val: 2}....]

const transformToObjects = numArr => {
  let tempArr = [];
  numArr.map(x => tempArr.push({val: x}));
  return tempArr
}


let array = [1, 2];


console.log(transformToObjects(array));