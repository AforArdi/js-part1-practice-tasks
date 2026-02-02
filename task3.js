// Write a function to count the number of vowels in a string.

function countVowel(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const newStr = str.toLowerCase();
    const newArr = newStr.split('');

    for (let i = 0; i < newArr.length; i++) {
        if (vowels.includes(newArr[i])){
            count++;
        }
    }
    return count;

}

const myMessage = "is before i then comes o but afterE ok"
console.log(countVowel(myMessage));