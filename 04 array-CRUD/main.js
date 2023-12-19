// Create an Array and apply CRUD opreations
// primitive array
let snacks = [
  "chocolate",
  "chips",
  "45 apples",
  "pineapple",
  "custardapple",
  "banana",
];
// adding new item
snacks.push("biscuit");
snacks.unshift("apple");
snacks.splice(2, 4, "grapes", "watermelon");

// deleting
snacks.pop();
snacks.shift();
snacks.splice(2, 3);
console.log(snacks[3]);

// read
console.log(snacks.indexOf("grapes"));
console.log(snacks.includes("45 apples"));

console.log(snacks);

// Reference array

const shopping = [
  { id: 1, item: "shirts", quantity: 3 },
  { id: 2, item: "pants", quantity: 2 },
  { id: 3, item: "tops", quantity: 4 },
  { id: 4, item: "shoes", quantity: 1 },
];

const groceries = [
  { id: 1, item: "milk", quantity: 2 },
  { id: 2, item: "curd", quantity: 1 },
  { id: 3, item: "juice", quantity: 3 },
];

console.log(shopping);

// read
let item = shopping.find((shopping) => {
  return shopping.item === "shoes";
});
console.log(item);

//add
shopping.push({ id: 5, item: "books", quantity: 5 });
console.log(shopping);

//combining
let items = [...shopping, ...groceries];
console.log(items);
