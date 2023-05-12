const persons = [
  {
    firstName : 'Feisal',
     lastName : 'Adan',
     age : 20,
     fullName: function() {
     return this.firstName + " " + this.lastName;
     },
     hobbies: ['Football', 'reading', 'writing']
    
  },
  
  {
    firstName : 'Abdi',
    lastName : 'Hassam',
    age : 40,
    fullName: function() {
    return this.firstName + " " + this.lastName;
    },
    hobbies: ['Football', 'reading', 'writing']
  }
]



// console.log(person[1].firstName);
// loop through objects  using template literals / back ticks
persons.forEach( (person) => {
  // concatenations
 console.log(`firstName: ${person.firstName}\n lastName ${person.lastName} \n age ${person.age}`);
})