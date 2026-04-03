const mission = {
  title: "Scout the Ruins",
  status: "pending",
  attempts: 0,
  start() {
    this.status = "in-progress";
    this.attempts += 1;
    console.log("mission started");
    return this; // enable chaining
  },
  complete() {
    this.status = "done";
    console.log("mission completed");
    return this;
  },
  summary() {
    return `${this.title} -> ${this.status} (attempts: ${this.attempts})`;
  },
};

mission.start().complete();
console.log("summary:", mission.summary());

// using call/apply to reuse a method
const ops = { title: "Resupply", status: "pending", attempts: 0 };
mission.start.call(ops);
console.log("call -> ops status:", ops.status, "attempts:", ops.attempts);

// cloning vs freezing
const cloned = { ...mission };
console.log("cloned object:", cloned);

const frozenConfig = Object.freeze({ mode: "hard", retries: 3 });
console.log("is frozen:", Object.isFrozen(frozenConfig));
// frozenConfig.mode = "easy"; // would silently fail or throw in strict mode

// inspecting properties
console.log("hasOwnProperty title:", mission.hasOwnProperty("title"));
console.log("'title' in mission:", "title" in mission);
