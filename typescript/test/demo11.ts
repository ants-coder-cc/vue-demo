// 类的getter setter 和 static
class XiaoJieJie {
    constructor(private _age:number) {

    }
    get age() {
        return this._age - 10
    }
}
const dajiao = new XiaoJieJie(28)
console.log(dajiao.age);