// Description: Expanding cards

// First we select all the panels with the querySelectorAll 
// method and store them in a constant called panels.
const panels = document.querySelectorAll('.panel');

// We loop through the panels and add an event listener to each one.
// The event listener will call removeActiveClasses function and then
// add the active class to the panel that was clicked.
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

// This function will remove the active class from all the panels.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

