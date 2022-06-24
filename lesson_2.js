// Bài 2: 
// -	Input: Cho 1 object
// -	Output: Viết hàm kiểm tra xem object đó rỗng không



var obj = {
    // firstName: 'Hieu',
    // lastName: 'Bui'
};


function checkEmptyObject(obj) {
    var result = Object.keys(obj).length === 0 ? "Empty" : "Not empty"
    return result
}
console.log(checkEmptyObject(obj));