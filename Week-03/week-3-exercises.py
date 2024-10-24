# week-3-exercises.py
# 
# Python Exercises: 
# Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, lists, and user input.
#
# This is how you can add an author attribution and software license within your Python code:
# Author: Louis Goldford
# License: Creative Commons Attribution 4.0 International (CC BY 4.0)
# 
# You are free to:
# - Share: copy and redistribute the material in any medium or format
# - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
#
# Under the following terms:
# - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
#   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
#
# Full license text: https://creativecommons.org/licenses/by/4.0/
#
# Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
#
# To “comment in” or “comment out” lines of code in VS Code:  
# Highlight the line(s) of code you want to change, and then:  
# - on Windows: Press Ctrl + / 
# - on Mac: Press Cmd + /

# Exercise 1: Declare and Initialize a MIDI Note
middleC = 60
print(middleC)

# Exercise 2:
firstPhrase = "Do Re Mi"
secondPhrase = "Fa Sol La"
print(firstPhrase + " " + secondPhrase)

# Exercise 3:
quarterNote = 1.0
eightNote = 0.5
print(quarterNote + eightNote)

# Exercise 4:
floatNote = 1.32930940394
print(round(floatNote))

# Exercise 5:
triad = [60, 64, 67]
print(triad)

# Exercise 6:
note1 = 60
note2 = 64
note3 = 67
averageNote = (note1+note2+note3)/3
print(averageNote)

# Exercise 7:
print(round(averageNote))

# Exercise 8:
solfegePhrase1 = "Sol La Ti Do"
solfegePhrase2 = "Do Re Mi Fa"
print(solfegePhrase1 + ' ' + solfegePhrase2)

# Exercise 9:
floatNote1 = 1.4238948923
floatNote2 = 2.4839438948
print(round(floatNote1+floatNote2))

# Exercise 10:
import random
solfegeArray = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti", "Do"]
random.shuffle(solfegeArray)
print(solfegeArray)

# Exercise 11:
userInput = int(input("Enter a MIDI Note number: "))
print("Entered note is" + " " + str(userInput))

# Exercise 12:
userDurInput1 = float(input("Enter a first note duration: "))
userDurInput2 = float(input("Enter a second note duration: "))
print("Total duration is: " + str(userDurInput1+userDurInput2))

# Exercise 13: 
userSolInput1 = (input("Enter a first solfege note: "))
userSolInput2 = (input("Enter a second solfege note: "))
print("You entered: " + userSolInput1 + " and " + userSolInput2)

# Exercise 14:
userTempoInput = float(input("Enter a tempo in BPM: "))
durationFromBPM = 60000 / userTempoInput
print("Duration of the four beats in this tempo is: " + str(durationFromBPM*4))

# Exercise 15:
userBeatInput = float(input("Enter the duration of the beat in ms: "))
print("Corresponding tempo is: " + str(60000/userBeatInput))

# Exercise 16:
import time
userBPM = float(input("Enter a BPM to receive ticks in the console: "))
intervalInSeconds = 60 / userBPM
for i in range(4):
    print("Tick " + str(i+1))
    time.sleep(intervalInSeconds)