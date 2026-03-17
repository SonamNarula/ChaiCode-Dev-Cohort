(() => {
  console.group("Chapter 6: Functions");

  // Declaration (hoisted)
  function add(a, b) {
    return a + b;
  }
  console.log("add(2,3) ->", add(2, 3));

  // Expression (not hoisted)
  const multiply = function (a, b) {
    return a * b;
  };
  console.log("multiply(2,3) ->", multiply(2, 3));

  // Arrow function for concise callbacks
  const squared = [1, 2, 3].map((n) => n ** 2);
  console.log("squared ->", squared);

  // Default + rest parameters
  const greet = (name = "guest", ...topics) =>
    `Hi ${name}, we can discuss ${topics.join(", ") || "anything"}.`;
  console.log(greet("Ada", "scope", "closures"));

  // Higher-order function
  const makeLimiter = (limit) => (value) => Math.min(value, limit);
  const capAt10 = makeLimiter(10);
  console.log("capAt10(12) ->", capAt10(12));

  // Closure example
  function counter(start = 0) {
    let current = start;
    return {
      next: () => ++current,
      value: () => current,
    };
  }
  const c = counter(5);
  console.log(c.next(), c.value());

  console.groupEnd();
})();
