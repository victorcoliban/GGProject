// 1. You will be given an array of drinks, with each drink being an object with two properties: name and price.

// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// 1

let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];

function sortDrinkByPrice1(a, b) {
    if ( a.price < b.price ){
        return -1;
    }
    if ( a.price > b.price ){
    return 1;
    }
    return 0;
}

console.log(drinks.sort(sortDrinkByPrice1));

// 2

const sortDrinkByPrice2 = drinks.sort((a, b) => parseInt(a.price) - parseInt(b.price));

console.log(sortDrinkByPrice2);

// 2. A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is,

// knowing the following rules:

// •    The wanted word is in lowercase.

// •    The crowd of letters is all in uppercase.

// •    Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

let wordInString = "UcUNFYGaFYFYGtNUH";

const detectWord = () => {
    let output = '';
    for (let i = 0; i < wordInString.length; i++) {
        let character = wordInString.charAt(i);
        if (character == character.toLowerCase()) {
            output = output + character;
        }
    }
    console.log(output)
}

detectWord()

// 3. In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines

// if the relation is true or false.

let str = "8<7";

const isTrue01 = expression => {
    const operators = {
        '=': (a, b) => a === b,
        '<': (a, b) => a < b,
        '>': (a, b) => a > b
    },
        [, a, operator, b] = expression.match(/^(\d+)(\D+)(\d+)$/);
    return operators[operator]?.(+a, +b) || false;
}

// Malicious code: invoking eval can crash a computer. 
// For example: if you use eval server-side and a mischievous user decides to use an infinite loop as their username

console.log(isTrue01(str))

const isTrue02 = expression => { 
if (eval(expression) === true) {
    return true;
    }
else {
    return false;
    }
}

console.log(isTrue02(str))

// aceeasi functie ca mai sus scrisa altfel

const isTrue03 = expression => {
    return eval(expression) ? true: (eval(expression) === true);
}

console.log(isTrue03(str))

// 4. Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print

// before any of the colors run out.

const inkLevels = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
};

const result = () => {
    const minValue = Math.min.apply(null, Object.values(inkLevels));
    console.log(minValue)
}

result()

// 5. A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

// Create a function that sorts an array and removes all duplicate items from it.

// A

let array = [1, 3, 3, 5, 5, 5];

let set01 = () => new Set(array);

const newArray = Array.from(set01());

console.log(newArray)

// B

const newArray01 = () => console.log(new Set(array));

newArray01()

// sau 

const newArray02 = console.log(new Set(array));

// C

const removeDup = array => {
    let prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return array.filter(item => {
        let type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

console.log(removeDup(array))



