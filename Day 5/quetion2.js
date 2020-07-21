
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Javascipt Programming");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email},Age is ${this.age}`);
        return this;
    }

}
class Moderator extends User {
    constructor(name,age,email,role){
        super(name,age,email);
        this.role=role;
    }
 deleteUser(user)
 {
 users =users.filter(u =>{
     return u.email != users.email;
 })
 }
}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}
let user1 = new User('komal',24,'komal@gmail.com')
let user2 = new User('Ram',26,'ram@gmai.com')
let mod = new Moderator('Geeta',24,'Geetab@gmail.com','Moderator');
let admin = new Admin('Ramesh',36,'ramesh@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');

admin.addCourse(user2,'Java');
admin.addCourse(user2,'ASP.Net');








