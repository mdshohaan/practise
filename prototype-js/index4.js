//  Class practise Test

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`its ${this.name} and ${this.email}`);
  }
}
const student1 = new User("Ajit", "abc@gmail.com");
const student2 = new User("Arif", "xxx@gmail.com");
