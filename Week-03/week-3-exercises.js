// week-3-exercises.js
// 
// JavaScript Exercises: 
// Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, arrays, and user input.
//
// This is how you can add an author attribution and software license within your JavaScript code:
// Author: Louis Goldford
// License: Creative Commons Attribution 4.0 International (CC BY 4.0)
// 
// You are free to:
// - Share: copy and redistribute the material in any medium or format
// - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
//
// Under the following terms:
// - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
//   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
//
// Full license text: https://creativecommons.org/licenses/by/4.0/
//
// Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
//
// To “comment in” or “comment out” lines of code in VS Code:  
// Highlight the line(s) of code you want to change, and then:  
// - on Windows: Press Ctrl + / 
// - on Mac: Press Cmd + / 

// Exercise 1: Declare and Initialize a MIDI Note
// var x; // declaration of the variable
// var x = 1; // declaration and initialization

console.log("Hello, World!");//print

var middleC = 60;
console.log(middleC);
console.log("The MIDI note for middle C is: " + middleC);
console.log("The MIDI note for F4 is: " + (middleC + 5));
console.log(typeof(middleC)); //why not integer but number? In JS integers and floats are treated as the same type.

// exercise 2
var phrase1 = "Do Re Mi";
var phrase2 = "Fa Sol La";
var completePhrase = phrase1 + " " + phrase2;
console.log(completePhrase);

// exercise 3
var quarterNote = 1.0; //1 second
var eightNote = 0.5; //0.5 second
var totalDuration = quarterNote + eightNote;
console.log(totalDuration);

//exercise 4
var noteDuration = 1.8934587138;
var roundedDuration = Math.round(noteDuration);
console.log(roundedDuration);

//exercise 5
var cMajorTriad = [60, 64, 67]; //storing multiple values into an array
console.log(cMajorTriad);

//exercise 6 
var cNote = 60, eNote = 64, gNote = 67;
var averageNote = (cNote + eNote + gNote) / 3;
console.log(averageNote);

//exercise 7
var roundAverageNote = Math.round(averageNote);
console.log(roundAverageNote);

//exercise 8
var firstPart = "Sol La Ti Do";
var secondPart = "Do Re Mi Fa";
console.log(firstPart + " " + secondPart);

//exercise 9
var floatNote1 = 1.43423819238;
var floatNote2 = 3.34832948090;
console.log(Math.round(floatNote1 + floatNote2));

//exercise 10
var solfegScale = [];
solfegScale = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti", "Do"];
console.log(solfegScale.sort(() => Math.random() - 0.5));

//exercise 11
var userInput = parseInt(prompt("Enter a MIDI note number: "));
console.log("Your entered note is: " + userInput);

//exercise 12
var userFirstNote = parseFloat(prompt("Enter a first duration:"));
var userSecondNote = parseFloat(prompt("Enter a second duration:"));
console.log("The total duration is: " + (userFirstNote+userSecondNote));

//exercise 13
var userSolfege1 = prompt("Enter a first solfege note: ");
var userSolfege2 = prompt("Enter a second solfege note: ");
console.log("You entered: " + userSolfege1 + " and " + userSolfege2);

//exercise 14
var userTempo = parseInt(prompt("Enter a tempo in BPM: "));
var beatDur = 60000 / userTempo;
console.log("The duration of four beats of this tempo in ms is: " + beatDur*4);

//exercise 15
var userBeat = parseInt(prompt("Enter a beat duration to receive the exact tempo in BPM: "));
console.log("The corresponding tempo in BPM is: " + 60000/userBeat);

//exercise 16
var bpmInput = parseInt(prompt("Enter your BPM: "));
var intervalInMs = 60000 / bpmInput;
setTimeout(function(){ console.log("Tick 1"); }, 0);
setTimeout(function(){ console.log("Tick 2"); }, intervalInMs);
setTimeout(function(){ console.log("Tick 3"); }, intervalInMs*2);
setTimeout(function(){ console.log("Tick 4"); }, intervalInMs*3);