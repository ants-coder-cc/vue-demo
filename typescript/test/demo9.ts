class Person {
    // 共有变量定义
   public name:string;
   public sayHello(){
       console.log(this.name + 'sayHello');
   }
} 
// 类的内部 和 外部 public private protected
class Teacher extends Person{
    public sayByb() {
        console.log('sayByb');
    }
}
const p1 = new Person();
p1.name = 'jshu';
p1.sayHello();
console.log(p1.name);
// 类的构造函数
