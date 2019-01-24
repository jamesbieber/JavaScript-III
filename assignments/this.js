/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when "this" has not been told what to reference and by default, references the window.
* 2. Implicit binding is when "this" is used and a function is called. "This" refers to the object to the left of the .
* 3. New Binding is when using "new" keyword. The constructor is passed a variable that is then used with "this".
* 4. Explicit Binding is when .call/.apply is used. A function is used with .call/.apply and "this" applies to the object passed to the function.
*
* write out a code example of each explanation above
*/

// Principle 1

// const person = {
// 	name: 'James',
// 	gender: 'M',
// 	do: function() {
// 		console.log(`${name}'s gender is ${gender}`);
// 	}
// }

// Principle 2

const person = {
	name: 'James',
	gender: 'M',
	do: function() {
		console.log(`${this.name}'s gender is ${this.gender}`);
	}
}

// Principle 3

const color = {
	name: 'Red'
}

const colorArray = ['red', 'black', 'blue', 'green'];

function colors(array) {
	console.log(`This color is ${this.name} and the others are ${array}`)
}

colors.call(color, colorArray);

// Principle 4

const color = {
	name: 'Red'
}

const colorArray = ['red', 'black', 'blue', 'green'];

function colors(array) {
	console.log(`This color is ${this.name} and the others are ${array}`)
}

const sayColors = colors.bind(color, colorArray);

sayColors();