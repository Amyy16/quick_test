// 1.  An array is a data structure used to store multiple values of different data types, this means arrays can hold integers, stings, boolean,
//     objects and even another array. Another thing to note about arrays is that they're zero indexed so the first element in the array has an index of 0.
//     Arrays can be manipulated in different ways using array methods.

//2.    push()
//      pop()
//      filter()
//      splice()
//      find()
//      slice()
//      shift()
//      unshift()
//      includes()
//      indexOf()

let fruits = ["orange", "mango", "banana", "apple", "avocado", "pineapple"];
fruits.push("watermelon"); // adds element to the end of the aeray
fruits.pop("pineapple"); //removes the last element of an array
fruits.shift("orange"); //removes element ath the beginning of an array
fruits.unshift("grape"); //inserts element at the beginning of an array

const includesApple = fruits.includes("apple"); //checks if apple is listed in the array, returns either true or false
console.log(includesApple);

const fruitIndex = fruits.indexOf("banana"); //checks index of banana
console.log(fruitIndex);

const slicedfruit = fruits.slice(1, 4); //returns a section of the array starting from index 1 ending at 4
console.log(slicedfruit);

const splicedfruit = fruits.splice(2, 3); //removes elements fron the array starting from the index of 2, deletes the next two elements since it has a delete count of two and returns deleted elements
console.log(splicedfruit);

const filteredfruit = fruits.filter((fruit) => fruit.includes("n")); // returns an  arrsy containing the element that statisfies the condtion in this case returns an array of fruits that has the letter n
console.log(filteredfruit);

const findfruit = fruits.find((fruit) => fruit.length > 6); // returns the first element that satisfies the condition in this case returns the first fruit tha has a length greater than 6
console.log(findfruit);
