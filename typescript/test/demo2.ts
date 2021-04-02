// 泛型 <ccc>  根据泛型的类型来定义要传的类型
function join<ccc>(first:ccc,second: ccc) {
    console.log(`${first}${second}`);
    return `${first}${second}`
}
// join<string>('ccc','.com')
// join<number>(1,2)
//  泛型中数组的使用  一般规定 <T>来表示泛型
function testFun<ANY>(params:ANY)