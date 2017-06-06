/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```
The size will always be positive and will only use whole numbers.
*/

// console.log("it works");
// function equals(got, expected) {
//   if(got === expected) {
//     console.log("✔︎ Passed");
//     console.log();
//   } else {
//     console.log("𝙭 Failed");
//     console.log("    Expected: " + expected);
//     console.log("    But got:  " + got);
//     console.log();
//   }
// }

function stringy(number) {
    var result = "";
    for (i = 0; i < number; i++) {
        if (i % 2 === 0) {
            return result += "1";
        } 
        else { 
            return result += "0"; 
        }
    }
}
// do something

equals(stringy(5), "10101");
equals(stringy(6), "101010");
equals(stringy(10), "1010101010");

