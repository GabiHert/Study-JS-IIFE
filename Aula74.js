(function (action) {
  const constant = "constant const";
  console.log(action, constant);
})("action argument");
console.log("--------------------------------");
(function (parameter1, parameter2, parameter3) {
  console.log(`parameter1 = ${parameter1}`);
  console.log(`parameter2 = ${parameter2}`);
  console.log(`parameter3 = ${parameter3}`);
})("arg. 1", "arg. 2", "arg. 3");
