const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const yearEl = document.getElementById("year");

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

    document.querySelectorAll("#navLinks a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
        });
    });
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const note = document.getElementById("formNote");

        if (!name || !phone) {
            note.textContent = "Please enter your name and phone number.";
            return;
        }

        const whatsappNumber = "919354260126";
        const whatsappMessage = "Hello Lovemeet Singh,\nI am " + name + ", I came across your website and would like to know more about " + service + "." + (message ? "\ns" + message : "") + "\nThank you.";

        const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

        note.textContent = "Opening WhatsApp...";
        window.open(whatsappUrl, "_blank");
        form.reset();
    });
}