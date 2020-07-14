"use strict";

//Promise is a JavaScript object for asynchronous operation.
//State: pending -> fulfilled or rejected
//Producer vs Consumer

//1.Producer
//when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log("doing something");
  setTimeout(() => {
    resolve("bang");
    // reject(new Error("no network"));
  }, 2000);
});

//2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally");
  });

//3. promise chaining

const fetchNumbers = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumbers
  .then((number) => number * 2)
  .then((number) => number * 3)
  .then((number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(number - 1), 1000);
    });
  })
  .then((number) => console.log(number));

//4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🍕"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} =>🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍖`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then(cook)
  .then(console.log)
  .catch(console.log);


//5. 