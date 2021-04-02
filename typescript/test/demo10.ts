// 类的构造函数
class Person{
    public name : string;
    // 构造函数
    constructor(name:string){
        this.name = name;
    }
}
class Teacher extends Person {
    // public age:number;
    constructor(public age:number) {
        // this.age = age;
        // 子类中使用constructor  必须调用super()方法
        super('jsp');
    }
}
const p1 = new Person('ccc');
const t1 = new Teacher(18);
console.log(t1.age);
console.log(t1.name);

// console.log(p1.name);