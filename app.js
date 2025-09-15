
// Exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((numbers) => {
  return numbers * 2;
});

console.log(numsTimesTwo);

// Exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const pizza = [firstIngredient, secondIngredient] = pizzaToppings;
console.log (firstIngredient)
console.log (secondIngredient)

//Exercise 3

const car = {
  make: 'Audi',
  model: 'Q5',
};
const cars = {make, model} = car;

console.log (make)
console.log (model)

