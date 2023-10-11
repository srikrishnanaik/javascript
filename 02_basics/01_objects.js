// singleton objects are created by constructor

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Krishna",
    "full name": "Srikrishna Naik",
    [mySym]: "myKey",
    age: 18,
    location: "Bengaluru",
    email: "Krishna@krishna.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(typeof mySym)

jsUser.email = "Sri@Sri.com"
// Object.freeze(jsUser)
// jsUser.email = "sri@hcl.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello jsUser ${this["full name"]}`);
}

console.log(jsUser.greeting())
