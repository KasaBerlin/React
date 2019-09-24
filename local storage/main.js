// LOCAL STORAGE API
// set Item(key,value) - store key / value pair
// getItem(key) - get the value by key
// removeItem(key) - remove the value with its key
// clear() - delete everything
// key(index) - gets the key on a given position
// length - the number of stored item

// can only store strings

localStorage.setItem("volt", "200watt");
localStorage.setItem("my name", "Katrin");
localStorage.setItem("my hometown", "East-Berlin");

const beats = (localStorage.music = "reggae");
console.log(`I like to listen to ${beats}`);

// const myself = localStorage.getItem("my name");
// console.log(myself);

// LOOPS
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}:${localStorage.getItem(key)}`);
}

// let keys = Object.keys(localStorage);
// for (let key of keys) {
//   console.log(`${key}:${localStorage.getItem(key)}`);
// }

// localStorage.user = JSON.stringify({ name: "Guinevere", surname: "Whang" });
// converts object into JSON for us

// let user = JSON.parse(localStorage.user);
// parses a JSON string, constructing the JavaScript value or object

console.log(user.name, user.surname);
localStorage.setItem("volt2", "200watt");

localStorage.clear();
