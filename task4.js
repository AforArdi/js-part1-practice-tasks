// Write a function to find the longest word in a given string.

function longWord(str){
    const newArr = str.split(' ');
    let word = "";

    for (let i = 0; i<newArr.length; i++){
        if (newArr[i].length > word.length){
            word = newArr[i];
        }
    }
    return word;
}

const myMoto = "I love programming but this word is bigger programmerisardi.";
console.log(longWord(myMoto));