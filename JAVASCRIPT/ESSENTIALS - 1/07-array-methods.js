const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

orders.forEach((order, index) => {
  console.log(`#${index + 1}: ${order.qty}x ${order.dish}`);
});

const dishNamesUpper = orders.map((order) => order.dish.toUpperCase());
console.log("map -> dish names upper:", dishNamesUpper);

const spicyOrders = orders.filter((order) => order.spicy);
console.log("filter -> spicy dishes:", spicyOrders.map((o) => o.dish));

const firstOver15 = orders.find((order) => order.price >= 15);
console.log("find -> price >= 15:", firstOver15?.dish);

const wingsIndex = orders.findIndex((order) => order.dish.includes("Wings"));
console.log("findIndex -> Wings dish:", wingsIndex);

const hasBudgetItem = orders.some((order) => order.price <= 10);
console.log("some -> price <= 10:", hasBudgetItem);

const allBelow20 = orders.every((order) => order.price < 20);
console.log("every -> price < 20:", allBelow20);

const totalItems = orders.reduce((sum, order) => sum + order.qty, 0);
console.log("reduce -> total items ordered:", totalItems);

const totalBill = orders.reduce((sum, order) => sum + order.price * order.qty, 0);
console.log("reduce -> total bill:", totalBill);

const trayStack = ["tray-A"];
trayStack.push("tray-B");
trayStack.push("tray-C");
console.log("push -> tray stack:", trayStack);
const topTray = trayStack.pop();
console.log("pop -> removed:", topTray, "stack:", trayStack);

const orderListCSV = orders.map((o) => o.dish).join(", ");
console.log("join -> order list CSV:", orderListCSV);
