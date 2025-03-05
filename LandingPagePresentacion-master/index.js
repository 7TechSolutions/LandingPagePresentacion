const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu when a nav link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Initialize EmailJS
(function() {
    emailjs.init("veQ9uWwAyGXypzx-e");
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const statusMessage = document.getElementById("status-message");
    statusMessage.innerText = "Enviando...";

    // Prevent the page from scrolling to the top
    statusMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Send the form using EmailJS
    emailjs.sendForm("service_uc5tpsm", "template_vagi53p", this)
        .then(() => {
            statusMessage.innerText = "¡Mensaje enviado!";
            this.reset(); // Clear the form after sending
        }, (error) => {
            statusMessage.innerText = "Hubo un error, inténtalo nuevamente.";
            console.error("Error:", error);
        });
});
