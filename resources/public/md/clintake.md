### CLIntake

Check out the source code on [Github](https://github.com/rtroxler/CLIntake)!

I wrote CLIntake to create a simpler way to track macronutrient consumption.

As the name implies, CLIntake is a Command Line Interface application, with simple commands
to track simple functions.

It is written in Ruby with Commander to parse commands and Sequel to record things to a local sqlite database file.

Example functionality:
```bash
$ intake ate chicken
What are chicken's macros: 
2/0/20

Daily Intake: 2 / 0 / 20
Macros remaining : 73 / 185 / 140
```


