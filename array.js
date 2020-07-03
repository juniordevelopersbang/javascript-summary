'user strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[fruits.length - 1]);//마지막 인덱스 

//3. Looping over an array of
console.clear();
for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}

//b.
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruits,) => console.log(fruits));

//4. Addition, deletion, copying

//push:add an item to the end
fruits.push('berry', 'peach');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('berry', 'peach');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop, push
// 인덱스를 뒤로 미루고 새로운 아이템을 앞에 넣어주기 때문에

//splice: remove an item by index position
fruits.push('melon', '🍵', '🧀');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'🍔','🍘');
console.log(fruits);

//combine two arrays of
const fruits2 = ['🌭', '🥯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5. searching 
//find index 
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍵'));// 없는 값은 -1로 출력

//includs
console.log(fruits.includes('🍵'));// 가지고 있는지 true false로 알려줌


//lastIndexOf 
console.clear();
fruits.push('apple');
console.log(fruits)
console.log(fruits.indexOf('apple'));//0
console.log(fruits.lastIndexOf('apple'));//5





