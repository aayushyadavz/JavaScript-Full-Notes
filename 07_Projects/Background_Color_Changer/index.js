// Selecting all span elements with class name "button"
const buttons = document.querySelectorAll('.button')
// Selecting "body" tag
const body = document.querySelector('body')
console.log(buttons) // Gives Nodelist

// forEach Loop on buttons
buttons.forEach( (button) => {
    console.log(button);
    // Event listener on every button
    button.addEventListener('click', /* Click event */ (e) => {
        console.log(e); // Gives PointerEvent on clicking on button
        console.log(e.target); // Gives span element on clicking & it means from which target this event came 
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id /* Or 'grey' */
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
    });
} );