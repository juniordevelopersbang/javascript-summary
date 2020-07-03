const obj = {}; // object literal syntax
const obj1 = new Object(); // object constructor syntax

const bang = { name: "bang", age: 4 };
bang.hasJob = true; // 동적언어여서 뒤에서 추가도 가능
delete bang.hasJob; //지우는 것도 가능

//2. computed properties
//key should be always string

console.log(bang["name"]); // 정확하게 어떤키인지 모를 때
//ex)
function printValue(obj, key) {
  console.log(obj[key]);
}

//3. property value shorthand
const person1 = {name:'bang', age: 2};
function makePerson(name, age) {
    return{
        name,//key 와 value의 이름이 같으면 생략 가능
        age,
    }
}

// 4. Constructor Function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in bang);
console.log('age' in bang);

// 6. for..in vs for..of
//for (key in obj)

console.clear();
for (key in bang){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4];

for (value of array){
    console.log(value);
}

// 7. Fun cloning
//object.assing(dest, [dbj1,dbj2....])
const user = {name: 'min', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

console.log(user3);
const user4 = Object.assign({}, user); 

console.log(user4);