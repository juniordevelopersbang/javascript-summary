"use strict";

class UserStorage {
  loginuser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "bang" && password === "1234") ||
          (id === "min" && password === "5678")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "bang") {
          resolve({ name: "bang", role: "admin" });
        } else {
          reject(new Error("not access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("eneter your id");
const password = prompt("eneter your password");
userStorage
  .loginuser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
