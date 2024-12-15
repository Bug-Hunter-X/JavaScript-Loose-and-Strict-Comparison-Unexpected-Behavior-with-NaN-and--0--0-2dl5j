# JavaScript Loose and Strict Comparison Unexpected Behavior with NaN and +0/-0

This repository demonstrates unexpected behavior in JavaScript's loose (==) and strict (===) comparison operators when dealing with NaN (Not a Number) and positive/negative zero (+0, -0).

## The Issue

JavaScript's comparison operators have quirks that can lead to unexpected results.  Specifically:

* **NaN:** `NaN` is never equal to anything, including itself (`NaN === NaN` evaluates to `false`).
* **+0 and -0:**  Positive zero and negative zero are considered equal in loose comparisons (`+0 == -0` evaluates to `true`), but distinct in strict comparisons (`+0 === -0` evaluates to `false`).

The provided `bug.js` file contains a function that highlights these behaviors.

## The Solution

The `bugSolution.js` demonstrates how to handle these cases robustly.  For NaN comparisons, using `Number.isNaN()` is recommended.  For zero comparisons, be mindful of whether a loose or strict comparison is appropriate for your context.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., browser console, Node.js).
3. Run the code and observe the output.