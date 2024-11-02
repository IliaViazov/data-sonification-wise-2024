// exercise 1: count through all MIDI note numbers from 0 to 127

for (var i = 0; i <= 127; i++) {
    console.log(`The MIDI note is: ${i}`)
};

// arithmetic series as in cao;

// exercise 2: geometric series

for (var i = 1; i <= 127; i = i * 1.5) {
    console.log(`The MIDI note is: ${i}`)
};

// exercise 3: build a harmonic series

var f0 = parseFloat(prompt("Enter the base frequency (f0) in Hz:"));
var numPartials = parseInt(prompt("Choose the number of partials to generate:"));
for (var i = 1; i <= numPartials; i++){
    console.log(`The partial n.${i} is: ${(i*f0).toFixed(2)} Hz`)
    // toFixed is a method for rounding the value to 2 digits after the period
    // in fString - i is the index and f0*i is the result of calculations
};

// exercise 4
var scale = [60, 62, 64, 65, 67, 69, 71, 72];

scale.forEach(function(note) {
    console.log(note);
});