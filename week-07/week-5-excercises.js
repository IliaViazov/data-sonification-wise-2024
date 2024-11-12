// exercise 1: count through all MIDI note numbers from 0 to 127

// for (var i = 0; i <= 127; i++) {
//     console.log(`The MIDI note is: ${i}`)
// };

// arithmetic series as in cao;

// exercise 2: geometric series

// for (var i = 1; i <= 127; i = i * 1.5) {
//     console.log(`The MIDI note is: ${i}`)
// };

// exercise 3: build a harmonic series

// var f0 = parseFloat(prompt("Enter the base frequency (f0) in Hz:"));
// var numPartials = parseInt(prompt("Choose the number of partials to generate:"));
// for (var i = 1; i <= numPartials; i++){
//     console.log(`The partial n.${i} is: ${(i*f0).toFixed(2)} Hz`)
//     // toFixed is a method for rounding the value to 2 digits after the period
//     // in fString - i is the index and f0*i is the result of calculations
// };

// exercise 4
// var scale = [60, 62, 64, 65, 67, 69, 71, 72];

// scale.forEach(function(note) {
//     console.log("Midi note is: " + note);
// });
// forEach is an analogue of for loop
// Control Flow - order in which your program executes



// The end of week 5
// Contintuation on week 7


// ex. 5 Transpose each note in a melody by 2 semitones

// var melody = [60, 62, 64, 65, 67];
// var transposedMelody = []; //initializing an empty array

// for (var i = 0; i < melody.length; i++) {
//     // transposedMelody[i] = melody[i]+2;
//     transposedMelody.push(melody[i] + 2);
// };
// console.log("original melody: "+ melody);
// console.log("transposed melody: "+ transposedMelody);

// ex. 6. FizzBuzz

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         // multiples of 3 AND 5
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0 && i % 5 != 0) {
//         console.log("Fizz");
//     } else if (i % 3 != 0 && i % 5 == 0) {
//         console.log ("Buzz");
//     } else {
//         console.log(i);
//     };
// }

// ex. 7. find all the As in each octave.
// conditional nested within a for loop

// for (var i = 0; i <= 127; i++) {
//     if ((i-9) % 12 === 0) {
//         // MIDI note 9 is A0, used here as a reference and an offset
//         // mod 12 === 0 ensure the value is A rather than any step above it
//         // i >=9 ensures no lower notes are chosen. 
//         // calculate the octave number for the note A
//         var octave = Math.floor((i - 9) / 12);
//         console.log("A"+octave + ' Midi Note: '+ i);
//     } else {
//         console.log(i);
//     }
// }


//ex. 8 increase tempo from 100 bpm in increments of 5 bpm until it reaches 120 bpm
// var tempo = 100;
// while (tempo <= 120) {
//     console.log(`Current tempo is ${tempo} BPM`);
//     tempo += 5;
// }