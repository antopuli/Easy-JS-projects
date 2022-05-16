
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


let VALUES = 
[

    "-", ".", "_", "?", "!", "/", "^", "#", "@", "$", "<", ">", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"

];


let password = {
    $generator: function() {
        var x = "";
        var numOfChar = getRandomIntInclusive(6, 20);
        for (var i = 0; i < numOfChar; i++) {
            let val = getRandomIntInclusive(1, VALUES.length - 1);
            x = VALUES[val] + x;
        }
        console.log(x);
    }
}


password.$generator();