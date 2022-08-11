// clone an object
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

let clone={...person,number:999999999};
console.log(clone);