"use strict";


// object-oriented programming
//class: template
//object: instance of class
//javascript classes
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const bang = new Person("bang", 24);
console.log(bang.age);
console.log(bang.name);
bang.speak();

//2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    //   if(value < 0){
    //       throw Error('age can not be negative')
    //   }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("min", "seok", -1);
console.log(user1.age);

//3. fields (public, private)
//Too soon!
//알아두는 정도 지원하지않은것이 많음

class Expreiment {
  publicField = 2;
  #privateField = 0;
}

const expreimnet = new Expreiment();
console.log(expreimnet.publicField);
console.log(expreimnet.privateField);

//4. Static properties and methods
//Too soon! 알아두는 정도

class Article {
  static publisher = "Dream coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const artice1 = new Article(1);
const artice2 = new Article(2);
console.log(artice1.publisher);
console.log(Article.printPublisher());

//5. inheritance

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return width * height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();// 변경하기 전 상위 class method 사용
    console.log('😊');
  }
  getArea() {
    return (this.width * this.height)/2;
  }
} //다형성으로 인해 shape에서 상속받은 methods를 사용할 수 있음
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
const triangle = new Triangle(20, 20, "red");
triangle.draw();

// 6. Class checking: instance of
console.log(rectangle instanceof Rectangle);// true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true