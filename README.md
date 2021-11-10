# Study-JS-IIFE

- IIFE functions.
- function executed automatically with private scope.

## IIFE.

---

```javascript
(function (action) {
  const constant = "constant const";
  console.log(action, constant);
})("action argument");
```

console.log: `action argument constant const`

- `constant` constant has no connection with the global scope.
- `action` parameter receives `"action argument"` as argument.

## Arguments and parameters.

---

```javascript
(function (parameter1, parameter2, parameter3) {
  console.log(`parameter1 = ${parameter1}`);
  console.log(`parameter2 = ${parameter2}`);
  console.log(`parameter3 = ${parameter3}`);
})("arg. 1", "arg. 2", "arg. 3");
```

console.log:<br> `parameter1 = arg. 1 `<br>`parameter2 = arg. 2` <br>` parameter3 = arg. 3`<br>
