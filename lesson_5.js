// Bài 5:
// -	Input: Cho 1 chuỗi
// -	Output: In ra chuỗi đảo ngược


const reverse = (str) => {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(reverse("abcGHE"))