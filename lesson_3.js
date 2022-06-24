// Bài 3: 
// -	Input: Cho 1 mảng
// -	Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó)


// C1:

function sum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

var arr = [7, 8, 9, 10]
console.log(sum(arr))


//C2:


let num = [37, 45, 63, 61, 54, 83, 95];
let sum2 = num.reduce((sum, element) => sum + element, 0);

console.log(sum2);


//c3: forEach
var sum3 = 0
num.forEach(element => {
    sum3 += element;
});

console.log(sum3);