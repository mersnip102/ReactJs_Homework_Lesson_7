// Bài 1: 
// -	Input: Cho vào chuỗi bất kì
// -	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, I, o, u)

function countVowels(str) {
    var count = 0
    const regex = new RegExp(/[aeiou]/);
    for (let i = 0; i < str.length; i++) {
        if (regex.test(str[i].toLowerCase())) {
            count += 1
        }
    }
    return "Chuỗi có " + count + " nguyên âm"
}

console.log(countVowels("AEIOU"))