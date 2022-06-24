// Bài 4: 
// -	Input: Cho 1 mảng
// -	Output: Tìm số lần xuất hiện của các phần tử trong mảng

/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng*/
function count(array, x) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x)
            count++;
    }
    console.log("Phần tử " + x + " xuất hiện " + count + " lần");
}
let arr = [5, 6, 4, 6, 5, 4, 7, 8, 9]

/*Lấy các phần tử duy nhất*/
let newArr = arr.reduce(function(accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
        accumulator.push(element)
    }
    return accumulator
}, [])


/*đếm số lần xuất hiện của các phần tử trong mảng*/
for (let i = 0; i < newArr.length; i++)
    count(arr, newArr[i]);