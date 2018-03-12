/* Challenge 7: Splitting the bill

Four friends went to dinner together. They agreed to split the bill evenly
between them. This is the bill:

Spaghetti - £7.99
Soup - £6.99
Sandwich x2 - £14.99
Coke x3 - £4.99

Write a function that will accept two arguments. The first argument is an array
of the item costs from the bill:

var bill = [7.99, 6.99, 14.99, 4.99];

The second argument is the number of friends:

var numberOfFriends = 4;

The function should return how much each friend should contribute to the bill.

**Extra credit**: How much should each friend pay if they want to add a 10% tip?
*/

var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;

function totalCost(bill) {
  return bill.reduce(function(a, b) {
    return a + b;
  });
}
console.log(`This is the total cost of the bill ${totalCost(bill)} .`);

function perEach(totalCost, numberOfFriends) {
    const totalCostwithBill = totalCost(bill);
  return totalCostwithBill / numberOfFriends;
}
console.log(
  `Each person has to give ${perEach(
    totalCost,
    numberOfFriends
  )} for the bill without tips`
);

// DONE;