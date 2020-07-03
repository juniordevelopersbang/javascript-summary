"user stirc";

// Q1. make a string out of an array
//join: 배열을 문자열로 합쳐줌
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
//split: 문자열을 배열로 만둘어줌
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split();
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
//reverse: 배열을 역순으로 만들어줌
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
// slice: 원하는 인덱스로 잘라서 새로운 배열을 만둘어줌 (마지막 인덱스는 -1)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
//find: 콜백 함수로 true인 값이 나올때까지 찾음
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
//filter: true인 값만 찾아서 배열로 만들어줌
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
//map: 콜백함수를 거쳐 나온 값을 배열로 만들어줌
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
//some: 콜백함수가 하나라도 만족하면 true로 리턴해줌
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  //every: 모든 요소가 true일때 true로 리턴해줌
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
//reduce: 콜백함수로 계산한 값을 누적해서 리턴해줌
{
  const result = students.reduce((prev, curr) => prev + curr.score,0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).filter((score)=> score > 50).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score).sort((a,b)=> a-b).join();
    console.log(result);
}
