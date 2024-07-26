let menu = document.querySelector(".menuicon");
let dropdown = document.querySelector(".dropdown-container");


menu.addEventListener("click", ()=>{
    dropdown.classList.toggle("show"); 
})


document.addEventListener("DOMContentLoaded", function() {
    // Create a link element for AOS CSS
    var aosLink = document.createElement('link');
    aosLink.rel = 'stylesheet';
    aosLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosLink);
    
    // Create a link element for your custom CSS
    var customLink = document.createElement('link');
    customLink.rel = 'stylesheet';
    customLink.href = 'style.css'; // Make sure the path is correct
    document.head.appendChild(customLink);

    // Create a script element for AOS JS
    var aosScript = document.createElement('script');
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosScript.onload = function() {
        // Initialize AOS after the script has loaded
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    };
    document.body.appendChild(aosScript);
});
