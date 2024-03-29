# Basic Calculator

This is my first project using JavaScript to create a simple app. This calculator handles basic operations only.

**You can check it out here:** [simple calculator](https://simple-calculator-hwm.netlify.app)

![Screen Shot 2022-10-13 at 4 03 48 PM](https://user-images.githubusercontent.com/103898493/195698689-b6b45c3e-54f7-4cf1-a47b-9ddd20285a1d.png)

## How It's Made:
**Languages used: HTML, CSS, JavaScript**

Disclaimer: I did reference a few calculator tutorials on youtube/google to create this calculator app. I did not copy the tutorials step by step nor did I copy/paste any code. I tried to get as far as I could with the JavaScript on my own before referencing any videos. The tutorials were a way for me to have some extra guidance when I was stuck. 

To begin, I typed out the HTML which consists of the calculator and all of its pieces (display and buttons). I then did all the styling with CSS. 
I wanted my calculator to have a Matrix-esque look to it, so I opted for black and grey as my main colours with a pop of neon green for
the calculator buttons and screen. 

For the JS, I decided to create one event listener for anywhere clicked within the area that contains the calculator buttons and then write logic based on
if an actual button was clicked. From there, I wrote some logic to handle if a button was a number or an operator. This affects whether or not something 
would be addded to the display or if a number needed to be assigned to a variable, to be used in the computation of numbers punched into the calculator.
If a number button was clicked, it was added to the display. If an operator was clicked, whatever number was on the display would be stored as a variable. 
If the equals button was clicked, it would store whatever second number was shown on the display (the number input after the operator)
and store that number in a variable as well. Clicking equals would also execute the compute function, which checks to see what operator was clicked and
does some math based on that operator (if + was clicked, the calculation would be addition or if - was clicked, the calculation would be subtraction). 
This is a simple run down of how the calculator works!

## Optimizations:
If I had more time, I would have written the JS with OOP in mind, to better organize my code and improve it's functionality/readability. 

The other two major things I would have done is to allow the calculator to handle the addition of negative numbers and to handle the calculation of more 
than two numnbers at a time (for example, my calculator can handle 2 + 2 = 4 but not 2 + 2 + 2 = 6). 

## Lessons Learned
This was my first time building an application with JavaScript. I learned a lot! Some of my main takeaways are:
- learning how to use/implement custom data attributes using data.set
- nesting if statements to create more complex logic 
- gaining more experience using built in methods and learning their capabilities/limitations (ie. Number, toString, toFixed, incluces, matches)
- planning out or "wireframing" in a sense, what you want your program to be able to do, creating a plan and starting to build something based on that plan
