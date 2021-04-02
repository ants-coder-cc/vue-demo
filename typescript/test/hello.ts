console.log('ts');
// 数字声明
const a:number = 3;
// 字符串
const b:string = '3';
// 数组
const c:number[] = [1,2,3,4];
const d:Array<number> = [1,3];
const arr : any[] = [1,'33',true];
// 元组 可以为数组中的每个参数定义相对应的类型
const e : [number,string] = [1,'test'];
// 枚举
enum error {
    blue = 3,
    "orange"
}
const f: error =error.orange;
console.log(f);  // 输出4
//  如果未赋值的上一个值是数字那么这个未赋值的值的是一个值的值 +1 
//  如果未赋值的上一个值未赋值那么输出的就是它的下标
//  如果未赋值的上一个值的值是非数字，那么必须赋值


// 布尔类型
const g: boolean =true;

// 对象
const i : object ={};
// undefined 常用于组合类型
let j : number | undefined;

// null 
let k : null ;
// void 指定方法类型，表示没有返回值,方法体中不能
function aa():void{
    console.log(1);
}
// 如果方法有返回值 可以加上返回值的类型
function bb():number{
    return 1 ;
}

// never 其他类型 (包括null和undefined)的子类型，代表从不会出现的值
let l:never;
// 匿名函数并抛出异常
l = (() => {
    throw new Error('qqq');
})();

// 任意类型
// 让参数可以是任何一种类型
let h:any =1 ;
h = true;
h = 'st';   

//  类  
class Person {
    // 私有变量
    private name : string;
    // 构造函数
    constructor(name:string) {
        this.name = name;
    }
    // 获取姓名
    getName() : string {
        return this.name;
    }
    // 设置名字
    setName(name:string):void {
        this.name = name;
    }
}
let p = new Person('zhangsan');
p.setName('list');
console.log(p);
//  类 继承
class Son extends Person {
    // 静态属性
    public static age: number = 18;
    public school: string;
    // 构造函数
    constructor(name:string,school:string){
        // 访问派生类的构造函数中的 "this" 前，必须调用 "super",初始化父类构造函数 --并把参数传给父类
        super(name);
        //把传进来的school赋值给全局变量
        this.school = school;
    }
    // 静态方法
    static run(name:string) : string {
        return `${name}在跑步，他的年龄才${this.age}`;
    }
}
// public 在当前类里面，子类，类外面都可以访问
// protected 在当前类和子类内部可以访问，类外部无法访问
// private 在当前类内部可访问，子类，类外部都无法访问。
// 属性不加修饰符,默认就是公有的 (public)
let son = new Son('wangwu','qinghuadaxue');
son.setName('zhaoliu');
console.log(son);
console.log(Son.run('fangqi'));
console.log(Son.age);
//  多态
// 接口
// 泛型
// 模块
// const numberArr:(number | string)[] = [1,2,3,'4'];
// 元祖
const numberArr:[number,number,string] = [1,1,'2'];

