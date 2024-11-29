// Define two numbers
const num1 = 10;
const num2 = 20;

// Calculate the sum
const sum = num1 + num2;

// a. Display the sum using document.write()
document.write(`<p>Sum using document.write(): ${sum}</p>`);

// b. Display the sum using window.alert()
window.alert(`Sum using window.alert(): ${sum}`);

// c. Display the sum using innerHTML
document.getElementById('result-display').innerHTML = `<p>Sum using innerHTML: ${sum}</p>`;

// d. Display the sum using console.log()
console.log(`Sum using console.log(): ${sum}`);
