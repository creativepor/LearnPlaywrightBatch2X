// 115_Strings.js — Chapter 14 starter examples

// string creation
const s1 = 'single quotes';
const s2 = "double quotes";
const name = 'Alice';

// template literal
const greeting = `Hello, ${name}!`;

console.log(s1, s2, greeting);

// common methods
const text = '  Hello, JavaScript Strings!  ';
console.log('length:', text.length);
console.log('trim:', text.trim());
console.log('slice:', text.slice(2, 7));
console.log('includes "JS":', text.includes('JS'));
console.log('replace:', text.replace('JavaScript', 'JS'));

// iterating characters
for (const ch of 'abc') console.log(ch);

// immutability demonstration
let a = 'foo';
a = a + 'bar';
console.log('concatenated:', a);
