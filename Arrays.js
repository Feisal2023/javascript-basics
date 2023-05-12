let Name = ['Ali', 'Abdi', 'Mohamed'];

// console.log(Name);
// Adding an element to end of the array

Name.push('Ahmed');
// removing an element to end of the array
Name.pop();
// console.log(Name);
// Adding an element at start of the array
Name.unshift('Hamdi');
// console.log(Name);
// Removing an element at start of the array
Name.shift();
// console.log(Name);

// Removing Specific element

let pos = Name.indexOf('Abdi');
let removeElement = Name.splice(pos, 1);
console.log(Name);