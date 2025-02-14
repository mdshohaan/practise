// class player {
//   constructor(name, age, field) {
//     this.name = name;
//     this.age = age;
//     this.field = field;
//   }
//   sayHello() {
//     return `Hi I am ${this.name} and ${this.field}`;
//   }
// }
// const sakib = new player("sakib", 24, "bat");
// console.log(sakib);
// console.log(sakib.age); // 35
// console.log(sakib.sayHello()); //Hi I am sakib and bat

//* (Inheritance)
class Human{
  constructor(name){
    this.name = name
    this.age = 24
    this.skills = "bat"
  }
}
class Baby extends Human {
  constructor(name){
    super()
    this.cute = true
  }
  cry(){
    return "waa waa"
  }
}
const monti = new Baby('monti')
console.log(monti.age);