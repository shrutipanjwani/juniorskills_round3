// Navbar Responsiveness
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelector("nav .nav-links");
const navItems = document.querySelectorAll("nav .nav-links li");

hamburger.addEventListener("click", () => {
	// Animate Links
	navLinks.classList.toggle("open");
	navItems.forEach((navItem) => {
		navItem.classList.toggle("fade");
	});

	// Hamburger Animation
	hamburger.classList.toggle("toggle");
});

// Banner Image Slider
let slides = document.querySelectorAll(".slide-container");
let index = 0;

// Function next
function next() {
	slides[index].classList.remove("active");
	index = (index + 1) % slides.length;
	slides[index].classList.add("active");
}

// Function previous
function prev() {
	slides[index].classList.remove("active");
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add("active");
}

// Auto Play
setInterval(next, 4000); // Change slides every 4 seconds

// Countdown for event
// Set the date we're counting down to
var countDownDate = new Date("Aug 28, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("count").innerHTML = `
    <div class="count-box">
        <h2 class="count-number">${days}</h2>
        <p class="count-word">Days</p> 
    </div>
    <div class="count-box">
        <h2 class="count-number">${hours}</h2>
        <p class="count-word">Hours</p> 
    </div>
    <div class="count-box">
        <h2 class="count-number">${minutes}</h2>
        <p class="count-word">Minutes</p> 
    </div>
    <div class="count-box">
        <h2 class="count-number">${seconds}</h2>
        <p class="count-word">Seconds</p> 
    </div>`;

	// If the count down is over, say its expired
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("count").innerHTML = "EXPIRED";
	}
}, 1000);
