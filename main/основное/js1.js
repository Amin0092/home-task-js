// Задание - сложить все цифры внутри массива в одну переменную тотал с помошью цикла
let arr = [
	[{ a: { price: 20 } }],
	[{ a: { price: 35 } }],
	[{ a: { price: 44 } }],
]
prices = []
let total = 0  

for(let value of arr){
	for(let item of value){
		prices.push(item.a.price);
	}
}

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log(total);
// console.log(total);

// console.log(arr);