//Refine Version of code

const input = document.getElementById("inputField");
const main = document.querySelector("main");

const evaluateExpression = () => {
    try {
        if (input.value.trim() !== '') {
            let result = eval(input.value);
            input.value = isNaN(result) || result === Infinity ? 'Error' : result;
        }
    } catch {
        input.value = 'Error';
    }
};

main.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const buttonText = e.target.textContent;
        if (buttonText === "C") {
            input.value = "";
        } else if (buttonText === "=") {
            evaluateExpression();
        } else {
            input.value += buttonText;
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        evaluateExpression();
    }
});

//Note
// When buttons are clicked, their text content is appended to the input field. If the = button is clicked, the current input value is evaluated.
// If the C button is clicked, the input field is cleared.
// Pressing the Enter key on the keyboard triggers the same evaluation as the = button.


// Practice Code
// const input = document.getElementById("inputField")
// const main = document.querySelector("main")


// function evaluateExpression() {
//     try {
//         // Check if the input value is empty
//         if (input.value.trim() === '') {
//             return;
//         }

//         // Use eval cautiously or consider a library for safety
//         let result = eval(input.value);

//         // Check if result is not a number (NaN)
//         if (isNaN(result) || result === Infinity) {
//             throw new Error("Invalid Expression");
//         }

//         input.value = result;
//     } catch (error) {
//         input.value = 'Error'; // Display error if invalid expression
//     }
// }

// main.addEventListener("click", (e) => {
//    if(e.target.tagName === "BUTTON"){
//     const buttonText = e.target.textContent
   
//     try {
        
        
//        if(buttonText === "C"){
//         input.value = ""
//        } else if(buttonText === "="){
//         evaluateExpression()
//        }
//        else{
//         input.value += buttonText
//        }
        
        


//     } catch (error) {
//         input.value = "error"
//     }

//    }
// });

// main.addEventListener('keydown', (e) => {

//     e.key = input.value
//     if (e.key === 'Enter') {
//         e.preventDefault(); // Prevent default action
//         evaluateExpression();
//     }
// });
