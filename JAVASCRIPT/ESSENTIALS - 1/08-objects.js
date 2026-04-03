const hero = {
  name: "Luna the Brave",
  class: "Mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};

// mutate / add / delete
hero.weapon = "Fire Staff";
delete hero.level;
console.log("hero after edits:", hero);

// computed property + defaulting
const ranger = {
  name: "Taylor Swift",
  agility: 80,
  stealth: undefined,
};
const rankKey = "rank";
ranger[rankKey] = "Scout";
console.log("ranger rank:", ranger.rank);
console.log("ranger stealth ?? 'no data':", ranger.stealth ?? "no data");

// destructuring with rename and default
const { name: heroName, class: heroClass, mana: heroMana = 0 } = hero;
console.log("destructured:", heroName, heroClass, heroMana);

// merging / spreading
const mergedLoadout = { ...hero, ...ranger, guild: "Night Watch" };
console.log("merged loadout:", mergedLoadout);

// keys / values / entries
console.log("keys:", Object.keys(hero));
console.log("values:", Object.values(hero));
console.log("entries:", Object.entries(hero));
