//1. object to Json
//stringfy(obj)
let json = JSON.stringify(true);
console.log("json: ", json);

json = JSON.stringify(["apple", "banana"]); //Json은 큰따옴표 형식
console.log("json: ", json);

//2. Json to object
const rabbit = {
  name: "tori",
  color: "white",
  birthdate: new Date(),
  jump: () => {//함수는 제외됨
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log('json: ', json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);//원하는 값만 가져올 수 도 있음
console.log('json: ', json);


json = JSON.stringify(rabbit, (key, value) => {//콜백함수도 사용가능
    console.log(`key: ${key} value: ${value}`);
    return key === 'name' ? 'bang' : value;
});
console.log('json: ', json);


//2. Json to object
//parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json); // obj를 json으로 만들 때 함수는 제외되서 다시 obj로 만들어도 함수는 없음
console.log('obj: ', obj);

console.log(rabbit.birthdate.getDate());
console.log(obj.birthdate);//birthdatesms string이 됨