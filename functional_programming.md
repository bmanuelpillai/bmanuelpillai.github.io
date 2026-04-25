# Introduction to Functional Programming in R

*Working with Functions and Packages in R*

## Topics Covered

1. Purpose of Functions
2. Control Flow with If, else
3. Loops using map
4. Packages using Devtools
## Why Use Functions

**Q. Why use functions when you can just copy and paste your code?**

A. Repeating yourself makes it more likely that you make a mistake while coding. Constantly repeating your code
will make your scripts very long and hard for others to read and debug. Writing functions will also make it
easier for you to reuse code that you wrote before.

### Example

```
    Define function:
    fahr_to_kelvin <- function(temp) {
      kelvin <- ((temp - 32) * (5 / 9)) + 273.15
      return(kelvin)
    }
    Call function:
    fahr_to_kelvin(32)
```

### Advanced Function Usage

```
          You can do more advanced things with functions
          like piping one function into another:

          Example:

          fahr_to_kelvin(32) |> kelvin_to_celsius()
```

More information on Functions can be found [here](https://jcoliver.github.io/learn-r/007-intro-functional-programming.html).
## Control Flow in R

**Q. What is control flow and why is it important?**

A. Control flow is useful when you want certain code to run if certain conditions are met.
It is typically used inside functions to change what code is executed based on the arguments that are passed in.

### If...Else Control Flow Boilerplate

```
if (condition is true) {
  perform action
} else {
  # that is, if the condition is false,
  perform alternative action
}
```

### If...Else Control Flow Example

```
x <- 8
if (x >= 10) {
  print("x is greater than or equal to 10")
} else if (x > 5) {
  print("x is greater than 5, but less than 10")
} else {
  print("x is less than 5")
}
```

More Information on Control Flow can be found
[here](https://american-stat-412612.netlify.app/material/1-12-lecture/).
## Loops

Say you have a function and want to apply it to more than one thing, what do you do? One solution is to create
a loop.

### Steps

1. Define the Function
2. Define a vector you want to apply the function to
3. Use `map()` to apply the function to each element in the vector
4. You can also write a for loop instead of passing the function and vector into the map function

### Example

```
          square <- function(x) { return(x * x) }

           # Create a vector of numbers

          vector1 <- c(2, 4, 5, 6)

           # Using map() function to generate squares

          map(vector1, square)
```

More information on Loops can be found [here](https://american-stat-412612.netlify.app/material/1-13-lecture/).
## Level 2: Working with Packages

### Using Devtools

### Working with Packages

Now you have a bunch of related functions that you keep on using in
a workflow. It is very convenient to put all of these functions into a
package, where you can group them together, document their
function for other users, and write tests.
Writing your own packages is a pretty advanced topic, but I
recommend starting with Hadley Wickham's R package's [book](https://r-pkgs.org/whole-game.html).
Which covers everything from creating a package directory, writing tests, documenting functions, and
publishing your
package on CRAN.

[Back to Top](#)
