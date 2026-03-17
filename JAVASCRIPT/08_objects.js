(() => {
  console.group("Chapter 8: Objects");

  const user = {
    name: "Ada",
    age: 36,
    skills: ["math", "code"],
    address: { city: "London", country: "UK" },
    greet() {
      return `Hello, I'm ${this.name}.`;
    },
  };

  console.log(user.greet());

  // Dot vs bracket access
  console.log(user.address.city);
  const dynamicKey = "age";
  console.log(user[dynamicKey]);

  // Adding & deleting props
  user.role = "engineer";
  delete user.skills;
  console.log("mutated user ->", user);

  // Destructuring + defaults
  const { name, address: { city }, hobby = "puzzles" } = user;
  console.log({ name, city, hobby });

  // Object utility patterns
  const keys = Object.keys(user);
  const entries = Object.entries(user);
  console.log({ keys, entries });

  console.groupEnd();
})();
