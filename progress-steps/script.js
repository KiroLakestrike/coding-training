// We get in all the Elements of the DOM that we need.
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; // This variable will keep track of the current active circle.

next.addEventListener("click", () => {
  currentActive++; // Increment the current active circle by 1.

  if (currentActive > circles.length) {
    // If the current active circle is greater than the number of circles, set it to the number of circles.
    currentActive = circles.length;
  }
  Update();
});

prev.addEventListener("click", () => {
  currentActive--; // Increment the current active circle by 1.

  if (currentActive < 1) {
    // If the current active circle is greater than the number of circles, set it to the number of circles.
    currentActive = 1;
  }
  Update();
});

function Update() {

    //Turns the circles grey or blue
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

        //Adjusts the width of the progress bar accordingly.
        const actives = document.querySelectorAll(".active");
        progress.style.width = (actives.length -1) / (circles.length -1) * 100 + "%";


        //Turns the Buttons on and off
        if (currentActive === 1) {
            prev.disabled = true;
        } else if (currentActive === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    });
}
