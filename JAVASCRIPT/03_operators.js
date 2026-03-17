(() => {
  console.group("Chapter 3: Operators");

  // Arithmetic
  const sum = 10 + 5;
  const mod = 10 % 3;
  console.log({ sum, mod, power: 2 ** 3 });

  // Comparison (strict over loose)
  console.log("3 == '3' ->", 3 == "3");
  console.log("3 === '3' ->", 3 === "3");

  // Logical short-circuiting
  console.log("&& stops on falsy ->", 0 && "skip");
  console.log("|| returns first truthy ->", "" || "fallback");

  // Nullish coalescing vs OR
  const supplied = 0;
  console.log("OR treats 0 as falsy ->", supplied || 42);
  console.log("?? keeps 0 ->", supplied ?? 42);

  // Ternary for compact conditionals
  const age = 19;
  const statusLabel = age >= 18 ? "adult" : "minor";
  console.log({ age, statusLabel });

  // Optional chaining to avoid TypeErrors
  const user = { profile: { city: "Delhi" } };
  console.log("user.profile?.city ->", user.profile?.city);
  console.log("user.account?.balance ->", user.account?.balance ?? "n/a");

  console.groupEnd();
})();
