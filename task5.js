// Generate a random number between 10 to 20.
// google help

function randomMinToMax(min, max){
    const rndm = Math.floor(Math.random() * (max - min + 1) + min);
    return rndm;
}

console.log(randomMinToMax(5, 10));