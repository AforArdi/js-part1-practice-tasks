// You are given an array of numbers. Count how many times the a number is repeated in the array.

function howMany(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n){
            count++;
        }
    }
    return count;
}

const ourArray = [5, 6, 11, 12, 98, 5, 100];
console.log(howMany(ourArray, 5));