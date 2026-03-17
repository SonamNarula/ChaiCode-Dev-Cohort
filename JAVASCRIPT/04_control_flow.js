(() => {
  console.group("Chapter 4: Control Flow");

  const temperature = 16;
  if (temperature < 10) {
    console.log("Too cold, stay in.");
  } else if (temperature < 20) {
    console.log("Grab a light jacket.");
  } else {
    console.log("T-shirt weather.");
  }

  // Guard clauses keep logic flat
  const register = (age, hasId) => {
    if (age < 18) return "Denied: underage";
    if (!hasId) return "Denied: need ID";
    return "Access granted";
  };
  console.log(register(17, true));
  console.log(register(22, false));
  console.log(register(25, true));

  // switch for multi-branch on the same value
  const role = "editor";
  switch (role) {
    case "admin":
      console.log("Full access");
      break;
    case "editor":
      console.log("Can edit content");
      break;
    default:
      console.log("Read-only");
  }

  console.groupEnd();
})();
