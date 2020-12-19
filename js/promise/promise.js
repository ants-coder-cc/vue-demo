//  promise的状态只能转变一种情况，不可逆 pending/reslove/reject
let p1 = new Promise((resolve, reject) => {
	// 异步过程
	setTimeout(function () {
		let asyncRes = 1;
		resolve(asyncRes); // 将成功的结果resolve出去
	}, 2000);
});
p1.then((res) => {
	console.log(res);
});
// setInterval(function() {
//     console.log(p1);
// },1000)
