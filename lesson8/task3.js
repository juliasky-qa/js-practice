const person = {
    firstName: 'Tomo',
    lastName: 'Test',
    age: 27
}
console.log(person);

person.email = 'user@email.com';
console.log(person);

delete person.age;
console.log(person);
