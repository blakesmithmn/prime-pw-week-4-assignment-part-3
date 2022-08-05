console.log('***** Cart Functions *****');
// // Make sure to test all functions here in the JS file!
// // We want to see how you are testing your code!!!

// ### Required Features
// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
console.log('--- ADDING VALUES TO AN ARRAY ---');

function addItem(value, arr) {
    basket.push(value);
    return true;
}

console.log(addItem('Apple', basket));
console.log(basket);
console.log(addItem('Pear', basket));
console.log(basket);
console.log(addItem('Peach', basket));
console.log(basket);
console.log(addItem('Mango', basket));
console.log(basket);

console.log('--- LIST ITEMS ---');
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
    return '--- end item list --- ';
}

console.log(listItems(basket));

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array


// function called empty - set to interact with an array
// it needs to loop through the array removing each item one at a time
// we could try using pop?
function empty(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // needs a condition to tell it to check for a value?
        if (arr.indexOf[i] !== -1) {
            // code to remove the item from the array
            arr.pop();
            console.log('removed all items from basket');

        }

    }

}


console.log(empty(basket));
console.log(basket);
// > __IMPORTANT__
// > Make sure that you are writing code *in the file* to test every function that you write!

// For example, to test `addItem`:
// ```
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
// ```

// ### Stretch Goals 
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;
// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(items, basket) {
    if (items > maxItems) {
        return false;
    }
    return true;
}
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

// __Using Array built-in functions!__

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found