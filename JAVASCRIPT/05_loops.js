(() => {
  console.group("Chapter 5: Loops");

  // for loop
  for (let i = 0; i < 3; i++) {
    console.log("for ->", i);
  }

  // while loop
  let w = 0;
  while (w < 3) {
    console.log("while ->", w);
    w++;
  }

  // do-while loop (runs at least once)
  let d = 0;
  do {
    console.log("do-while ->", d);
    d++;
  } while (d < 1);

  // for...of for iterables
  for (const char of "JS") {
    console.log("for-of ->", char);
  }

  // forEach for arrays (note: cannot break early)
  [10, 20, 30].forEach((value, idx) => {
    console.log(`forEach idx ${idx} ->`, value);
  });

  // break / continue control
  for (let n = 1; n <= 5; n++) {
    if (n === 3) continue; // skip 3
    if (n === 5) break;    // stop entirely
    console.log("loop control ->", n);
  }

  console.groupEnd();
})();
