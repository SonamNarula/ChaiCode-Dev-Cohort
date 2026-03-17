(() => {
  console.group("Chapter 2: Data Types & Type System");

  const primitives = {
    number: 3.14,
    string: "hello",
    boolean: true,
    bigint: 9007199254740991n,
    symbol: Symbol("sig"),
    undefined: undefined,
    null: null,
  };
  console.log("primitives ->", primitives);

  const references = {
    array: [1, 2, 3],
    object: { name: "Ada" },
    func: function greet() { return "hi"; },
  };
  console.log("references ->", references);

  // typeof quirks
  console.log("typeof null ->", typeof null, "(legacy bug)");
  console.log("typeof [] ->", typeof []);
  console.log("typeof function(){} ->", typeof function () {});

  // Useful helper to classify values precisely
  const toType = (value) =>
    Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  [null, undefined, [], {}, 42, "JS", 1n].forEach((v) => {
    console.log(v, "->", toType(v));
  });

  // Truthy / falsy quick check
  const maybeValues = [0, 1, "", "0", [], {}, null, undefined, NaN];
  const truthTable = maybeValues.map((v) => ({ value: v, isTruthy: !!v }));
  console.table(truthTable);

  console.groupEnd();
})();
