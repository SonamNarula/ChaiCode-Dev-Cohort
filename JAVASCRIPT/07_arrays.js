(() => {
  console.group("Chapter 7: Arrays");

  const heroes = ["Ada", "Linus", "Grace", "Guido"];
  console.log("initial ->", heroes);

  // Mutation vs non-mutation
  heroes.push("Tim"); // mutate
  const sorted = [...heroes].sort(); // non-mutating copy
  console.log({ mutated: heroes, sortedCopy: sorted });

  // Destructuring
  const [first, second, ...others] = heroes;
  console.log({ first, second, others });

  // Map / filter / reduce
  const lengths = heroes.map((name) => name.length);
  const longNames = heroes.filter((name) => name.length > 4);
  const totalChars = heroes.reduce((sum, name) => sum + name.length, 0);
  console.log({ lengths, longNames, totalChars });

  // for-of to iterate values
  for (const name of heroes) {
    console.log("for-of hero ->", name);
  }

  console.groupEnd();
})();
