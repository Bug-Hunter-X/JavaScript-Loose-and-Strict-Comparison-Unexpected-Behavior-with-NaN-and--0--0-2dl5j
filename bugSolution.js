function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Handle NaN cases
  } else if (Object.is(a, b)) {
    return true;
  } else if (a == b) {
    return true; // Loose comparison for cases other than NaN and +0/-0
  }
  return false;
}

console.log(foo(NaN, NaN)); // true
console.log(foo(0, -0));   // true
console.log(foo(1/0, 1/0)); // true