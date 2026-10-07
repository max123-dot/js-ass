Warm-up

1. FizzBuzz

Loop from 1 to 50 (a for loop).
For each number: if divisible by both 3 and 5 → print "FizzBuzz". Else if divisible by 3 → "Fizz". Else if divisible by 5 → "Buzz". Else → print the number itself.
Gotcha: check the "divisible by both" case first, before the individual 3 and 5 checks — otherwise it'll always print "Fizz" and never reach "FizzBuzz".
Tests: loops + % (modulo) + if/else-if ordering.

2. Grade calculator

Write a function getGrade(score) that takes a number 0–100.
Use if/else-if chain: ≥90 → A, ≥80 → B, ≥70 → C, ≥60 → D, else → F.
Gotcha: same ordering trap as FizzBuzz — check from highest to lowest, or your first condition will catch everything.
Tests: functions + conditionals + comparison operators.

3. Leap year checker

Function isLeapYear(year).
Rule: divisible by 4 AND (not divisible by 100 OR divisible by 400).
Try writing it as one boolean expression using && and ||, then also try it as nested if/else — compare which is easier to read.
Tests: logical operators, operator precedence.
Core: Arrays

4. Sum & average

Function sumAndAverage(numbers) — an array like [4, 8, 15, 16, 23, 42].
First pass: use a for loop with an accumulator variable (let total = 0, add each element).
Second pass: same thing but with .reduce((acc, curr) => acc + curr, 0).
Average = sum ÷ array length.
Tests: iteration basics, then your first real look at .reduce().

5. Find max/min

Function findMax(numbers) — don't use Math.max().
Start a variable max = numbers[0], loop through the rest, and if any element is bigger, update max.
Do the same for min.
Why this matters: this "start with first element, compare and replace" pattern shows up everywhere in array problems — it's the core mental model to nail.

6. Filter evens/odds

Function splitEvenOdd(numbers) returning two arrays.
Loop through, check num % 2 === 0, push into an evens array or odds array accordingly.
Once that works, try .filter() to do it in two lines instead of a loop.
Tests: array creation, .push(), then .filter() as the "next level" tool.

7. Remove duplicates

Function removeDuplicates(numbers).
Simplest approach: loop through, and for each number, only push it into a new array if (!newArray.includes(num)).
Shortcut worth knowing after: [...new Set(numbers)] does this in one line — but do the manual version first so you understand why it works.

8. Reverse an array manually

Function reverseArray(arr) — no .reverse().
Loop from the last index down to 0, pushing each element into a new array.
Or: swap elements from both ends moving toward the middle (harder, but a good mental exercise).
Tests: indexing an array backwards (arr[arr.length - 1]), loop direction.

9. Shopping cart total

Given const cart = [{item: "Bread", price: 500, qty: 2}, {item: "Milk", price: 800, qty: 1}, ...]
Function cartTotal(cart) that loops through, and for each object does price * qty, adding to a running total.
Try it with a for loop first, then with .reduce().
This is the big one — it combines arrays and objects, which is exactly where a lot of real app logic lives (and ties directly into your Barista project below).

10. Array flattening (stretch)

Input: [1, [2, 3], [4, [5, 6]]] → output: [1, 2, 3, 4, 5, 6].
This needs recursion (a function that calls itself) since the nesting can go arbitrarily deep.
Rough shape: loop through the array; if an element is itself an array, call your flatten function on it and merge the result in; otherwise just push the element.
Don't worry if this one takes a while — recursion is a genuine step up in difficulty, not a simple arrays exercise.
(There's also a built-in .flat(Infinity) — but write it by hand first.)
Combine with existing projects

11. Barista revenue extension

Take your existing Barista ordering system and change how you store orders: instead of one order at a time, push each completed order into an orders array as an object, e.g. {drink: "Latte", price: 1500}.
Write a function getDailyRevenue(orders) that sums up the price field across the whole array — same pattern as task 9.
This is good because you're not learning arrays in a vacuum — you're retrofitting them into code you already understand.

12. Discount checker for multiple customers

Change your discount checker from taking one customer's total to taking an array: [{name: "Ada", total: 15000}, {name: "Tunde", total: 8000}, ...].
Function getEligibleCustomers(customers) that returns a new array containing only the customers whose total meets your discount threshold — use .filter().
This is the same shape as task 6 (filtering), just applied to your real project's data instead of plain numbers.