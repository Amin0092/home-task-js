//Создайте Цикл, которая принимает массив и возвращает типы значений (типы данных) в новом массиве.

let arrayValuesTypes = [1, 2, "null", []]
// ➞ 
let types = []
for(let item of arrayValuesTypes) {
    if(typeof(item) === typeof("a") || typeof(item) === typeof(2)) {
        types.push(typeof(item))
    }
}
console.log(types);

let arrayValuesTypes1 = ["214", true, false, 2, 2.15, [], null]
// ➞ 

let types1 = []

for(let item of arrayValuesTypes1) {
    if(typeof(item) === typeof("a") || typeof(item) === typeof(1) || typeof(item) === typeof(true) ) {
        types1.push(typeof(item))
    }
}
console.log(types1);

let arrayValuesTypes2 = [21.1, "float", "array", ...["I am array"], null, true, 214]
// ➞ 
let types2 = []

for(let item of arrayValuesTypes2) {
    if(typeof(item) === typeof("a") || typeof(item) === typeof(1) || typeof(item) === typeof(true) ) {
        types2.push(typeof(item))
    }
}

console.log(types2);



//Создайте Цикл, которая принимает массив чисел или букв и возвращает строку.

let arrayToString = [1, 2, 3, 4, 5, 6] 

let tostr = []

for(let item of arrayToString) {
    if(typeof(item.toString()) === typeof('1')){
        tostr.push(item.toString());
    }
}

console.log(tostr);

let arrayToString1 = ["a", "b", "c", "d", "e", "f"] 

let arrayToString2 = [1, 2, 3, "a", "s", "dAAAA"]  

let tostr2 = []

for(let item of arrayToString2) {
    if(typeof(item.toString()) === typeof('1')) {
        tostr2.push(item.toString())
    }
}
console.log(tostr2);