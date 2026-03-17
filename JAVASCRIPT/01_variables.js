(() => {
  console.group("Chapter 1: Variables & Declarations");

  // var is function-scoped and hoisted with an initial value of undefined
  console.log("var is hoisted ->", hoistedVar); // undefined
  var hoistedVar = "I exist even before my line";

  // let/const are block-scoped and hoisted into the Temporal Dead Zone (TDZ)
  try {
    console.log(tdzLet); // ReferenceError in real code; caught here
  } catch (err) {
    console.log("let before declaration ->", err.name);
  }
  let tdzLet = "TDZ example";

  // const protects the binding, not the contents of objects/arrays
  const settings = { theme: "dark" };
  settings.theme = "light"; // allowed (mutating the object)
  console.log("const object mutated ->", settings);

  // Block scope demo
  {
    let scoped = "inside block";
    console.log("block scoped ->", scoped);
  }
  // 'scoped' is not accessible here.

  // Prefer const by default; use let only when reassignment is required
  const immutableId = 42;
  let counter = 0;
  counter += 1;
  console.log({ immutableId, counter });

  console.groupEnd();
})();
