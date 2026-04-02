const weaponName = "Flame Sword";
const weaponDamage = 42;
const isEnchanted = true;
const durability = null;        // explicit "no value"
let lastOwner;                  // undefined by default
const relic = { origin: "Ancient Ruins", tier: "Epic" };
const inventory = ["Potion", "Map", "Gem"];
const uniqueId = Symbol("relic");
const bigGold = 9007199254740993n; // BigInt beyond Number.MAX_SAFE_INTEGER

console.log("Weapon:", weaponName, "| type:", typeof weaponName);
console.log("Damage:", weaponDamage, "| type:", typeof weaponDamage);
console.log("Enchanted:", isEnchanted, "| type:", typeof isEnchanted);
console.log("Durability:", durability, "| type:", typeof durability);
console.log("Last Owner:", lastOwner, "| type:", typeof lastOwner);
console.log("Relic:", relic, "| type:", typeof relic);
console.log("Inventory:", inventory, "| type:", typeof inventory);
console.log("Symbol id:", uniqueId.toString(), "| type:", typeof uniqueId);
console.log("Big gold:", bigGold, "| type:", typeof bigGold);
