//  Class practise Test
let data = "Sceret Info";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data :", data);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    data = "New Data";
  }
}
const student1 = new User("Ajit", "abc@gmail.com");
const student2 = new User("Arif", "xxx@gmail.com");

const admin = new Admin("Admin", "admin@gmail.com");
