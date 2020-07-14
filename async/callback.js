"use strict";

//javascript는 동기적
// Execute the code block by orger after hoisting
//hoisting: var function declaration 맨위로 올림

console.log("1"); //동기
setTimeout(() => console.log("2"), 1000); //비동기
console.log("3"); // 동기

//동기적 콜백
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

//비동기적 콜백
function printwithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printwithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginuser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "bang" && password === "1234") ||
        (id === "min" && password === "5678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "bang") {
        onSuccess({ name: "bang", role: "admin" });
      } else {
        onError(new Error("not access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("eneter your id");
const password = prompt("eneter your password");
userStorage.loginuser(id, password, (user) => {
  userStorage.getRoles(
    user,
    (userWithRoles) => {
      alert(
        `Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`
      );
    },
    (err) => {
      console.log(err);
    }
  );
});
