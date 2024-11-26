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

//ex. 9 generate a sequence of ascending octaves between starting and ending points

// var startNote = parseInt(prompt("Enter a starting MIDI Note:"));
// var endNote = parseInt(prompt("Enter an ending MIDI Note:"));

// var currentNote = startNote;

// while (currentNote <= endNote) {
//     console.log(`MIDI note: ${currentNote} octave: ${Math.floor(currentNote/12-1)}`);
//     currentNote += 12;
// };

//ex. 10 transpose all notes by 3 semitons using map()

// var scale = [60, 62, 64, 65, 67, 69, 71, 72];
// var transposedScale = scale.map(function(note){
//     return note + 3;
// });
// console.log(`Transposed scale is ${transposedScale}`);

//ex. 11 filter only notes above MIDI 64 using filter()

// var scale = [60, 62, 64, 65, 67, 69, 71, 72];
// var highNotes = scale.filter(function(note){
//     return note > 64;
// });

// console.log(`Notes above 64 are: ${highNotes}`);

//ex. 12 iterate through 2 measures
// convert each note to midicents, print with setTimeout()

// var firstMeasure = [60, 62, 64, 65];
// var secondMeasure = [67, 69, 71, 72];

// var tempo = parseInt(prompt("Enter a tempo in BPM:"));

// var quarterNoteDuration = 60000 / tempo;

// // combine two arrays
// var measures = [firstMeasure, secondMeasure];

// // outer loop to iterate through measure
// for (var i = 0; i < measures.length; i++) {
//     //inner loop to iterate inside
//     for (var j = 0; j < measures[i].length; j++) {
//         var midicents = measures[i][j] * 100;
//         var delay = (i * measures[i].length + j) * quarterNoteDuration;
//         setTimeout(function(midicents, measureNum, beatNum) {
//             console.log(`measure ${measureNum} beat ${beatNum} pitch ${midicents}`)
//         }, delay, midicents, i+1, j+1)
//     }
// }

// ex. 13 parallel iterations of two notes

// var firstVoice = [60, 62, 64, 65];
// var secondVoice = [67, 69, 71, 72];

// var tempo = parseInt(prompt("Enter a tempo in BPM:"));
// var quarterNoteDuration = 60000 / tempo;

// for (var i = 0; i < firstVoice.length; i++) {
//     var midicentsVoice1 = firstVoice[i] * 100;
//     var midicentsVoice2 = secondVoice[i] * 100;
//     var delay = i * quarterNoteDuration;
//     setTimeout(function(midicentsVoice1, beatNum){
//         console.log (`beat ${beatNum} first voice ${midicentsVoice1}`)
//     }, delay, midicentsVoice1, i+1);
//     setTimeout(function(midicentsVoice2, beatNum){
//         console.log (`beat ${beatNum} first voice ${midicentsVoice2}`)
//     }, delay, midicentsVoice2, i+1);
// }

//ex. 14 transpose notes below MIDI 65 by 1 semitone, leave others unchanged
// var melody = [60,62,64,65,67];

// for (var i = 0; i < melody.length; i++) {
//     if (melody[i] < 65) {
//         melody[i] += 1;
//     }
// };
// console.log(melody)

//ex 15 choose a mode (major or minor)
// switch statement
// var mode = "minor";
// var scale;

// switch (mode) {
//     case "major":
//         scale = [60, 62, 64, 65, 67, 69, 71, 72];
//         break;
//     case "minor":
//         scale = [60, 62, 63, 65, 67, 68, 70, 72];
//         break;
//     default:
//         scale = [];
// }
// console.log(`selected scale: ${scale}`);

//ex 16 check note velocity and adjust
// var velocity = 50;
// var adjustedVelocity = (velocity < 64) ? velocity + 10 : velocity;
// console.log(`adjusted velocity ${adjustedVelocity}`);


//ex 17 stop processing when a rest (MIDI note of 0) is found
// break and continue
// var melody = [1000,500,1500, 0, 2000,6000];

// for (var i = 0; i < melody.length; i++) {
//     if (melody[i] === 0) {
//         console.log('rest found, stopping');
//         break;
//     }
//     console.log(`processing note: ${melody[i]}`);
// }
