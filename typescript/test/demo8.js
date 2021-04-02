// const screenResume = (name:string,age:number,bust:number) => {
//     age < 24 && bust >= 90 && console.log(name + '进入面试');
//     age > 24 && bust <= 90 && console.log(name + '你被淘汰');
// }
// screenResume('test',18,94);
var getResume = function (name, age, bust) {
};
var num = 0;
var boo = false;
var never = null;
var screenResume = function (girl) {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试111');
    girl.age > 24 || girl.bust <= 90 && console.log(girl.name + '你被淘汰111');
};
var girl = {
    name: 'sb',
    age: 29,
    bust: 89
};
screenResume(girl);
