/** @Title - class
 *  Class is a template code for creating an object
 * here brandName is object property which is besides this and name is arguments of setBrand
 * if child and parent have same method ,child method will be used.(its called method overrding)
 */
class Car {
  constructor(name) {
    this.brandName = name;
    console.log("Creating object");
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}
const bd = new Car();
bd.setBrand("BMW");
