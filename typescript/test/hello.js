var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log('ts');
// 数字声明
var a = 3;
// 字符串
var b = '3';
// 数组
var c = [1, 2, 3, 4];
var d = [1, 3];
var arr = [1, '33', true];
// 元组 可以为数组中的每个参数定义相对应的类型
var e = [1, 'test'];
// 枚举
var error;
(function (error) {
    error[error["blue"] = 3] = "blue";
    error[error["orange"] = 4] = "orange";
})(error || (error = {}));
var f = error.orange;
console.log(f); // 输出4
//  如果未赋值的上一个值是数字那么这个未赋值的值的是一个值的值 +1 
//  如果未赋值的上一个值未赋值那么输出的就是它的下标
//  如果未赋值的上一个值的值是非数字，那么必须赋值
// 布尔类型
var g = true;
// 对象
var i = {};
// undefined 常用于组合类型
var j;
// null 
var k = null;
// void 指定方法类型，表示没有返回值,方法体中不能
function aa() {
    console.log(1);
}
// 如果方法有返回值 可以加上返回值的类型
function bb() {
    return 1;
}
// never 其他类型 (包括null和undefined)的子类型，代表从不会出现的值
var l;
// 匿名函数并抛出异常
l = (function () {
    throw new Error('qqq');
})();
// 任意类型
// 让参数可以是任何一种类型
var h = 1;
h = true;
h = 'st';
//  类  
var Person = (function () {
    // 构造函数
    function Person(name) {
        this.name = name;
    }
    // 获取姓名
    Person.prototype.getName = function () {
        return this.name;
    };
    // 设置名字
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person('zhangsan');
p.setName('lisi');
console.log(p);
//  类 继承
var Son = (function (_super) {
    __extends(Son, _super);
    // 构造函数
    function Son(name, school) {
        // 访问派生类的构造函数中的 "this" 前，必须调用 "super",初始化父类构造函数 --并把参数传给父类
        _super.call(this, name);
        //把传进来的school赋值给全局变量
        this.school = school;
    }
    // 静态方法
    Son.run = function (name) {
        return name + "\u5728\u8DD1\u6B65\uFF0C\u4ED6\u7684\u5E74\u9F84\u624D" + this.age;
    };
    // 静态属性
    Son.age = 18;
    return Son;
}(Person));
// public 在当前类里面，子类，类外面都可以访问
// protected 在当前类和子类内部可以访问，类外部无法访问
// private 在当前类内部可访问，子类，类外部都无法访问。
// 属性不加修饰符,默认就是公有的 (public)
var son = new Son('wangwu', 'qinghuadaxue');
son.setName('zhaoliu');
console.log(son);
console.log(Son.run('fangqi'));
console.log(Son.age);
//  多态
// 接口
// 泛型
// 模块 
