export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Pepperoini Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5,
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Veggie Pizza",
    img: "/img/healthy-pizza.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Burger",
    img: "/img/burger.jpeg",
    section: "Sandwhich",
    price: 3,
  },
  {
    name: "Gyro",
    img: "/img/gyro.jpeg",
    section: "Sandwhich",
    price: 4.5,
  },
  {
    name: "Shrimp PoBoy",
    img: "/img/sandwich.jpeg",
    section: "Sandwhich",
    price: 6,
  },
  {
    name: "Fries",
    img: "/img/fries.jpeg",
    section: "Sides",
    price: 1,
  },
  {
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"],
    price: 1,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
