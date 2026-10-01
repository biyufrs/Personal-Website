"use strict";
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menue");
hamburger?.addEventListener("click", () => {
    menu?.classList.toggle("active");
    hamburger.classList.toggle("active");
});
const menuLinks = document.querySelectorAll(".menue a");
const aboutSection = document.querySelector("#about");
const skillsSection = document.querySelector("#skills");
const worksSection = document.querySelector("#works");
const contactSection = document.querySelector(".form");
menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = link.getAttribute("href");
        if (target === "#about") {
            aboutSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (target === "#skills") {
            skillsSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (target === "#works") {
            worksSection?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        menu?.classList.remove("active");
        hamburger?.classList.remove("active");
    });
});
const talkButton = document.querySelector(".navbutton button");
talkButton?.addEventListener("click", () => {
    contactSection?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});
const skillCards = document.querySelectorAll(".skill-card");
const skillDetails = document.querySelectorAll(".skill-detail .detail");
const defaultSkill = document.getElementById("default");
skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const skillName = card.dataset.skill;
        if (!skillName) {
            return;
        }
        skillDetails.forEach((detail) => {
            detail.classList.remove("show");
        });
        defaultSkill?.classList.remove("show");
        const selectedDetail = document.getElementById(skillName);
        selectedDetail?.classList.add("show");
    });
});
const contactForm = document.querySelector(".form form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("num");
const messageInput = document.getElementById("message");
if (contactForm &&
    nameInput &&
    phoneInput &&
    messageInput) {
    nameInput.value =
        localStorage.getItem("contactName") ?? "";
    phoneInput.value =
        localStorage.getItem("contactPhone") ?? "";
    messageInput.value =
        localStorage.getItem("contactMessage") ?? "";
    nameInput.addEventListener("input", () => {
        localStorage.setItem("contactName", nameInput.value);
    });
    phoneInput.addEventListener("input", () => {
        localStorage.setItem("contactPhone", phoneInput.value);
    });
    messageInput.addEventListener("input", () => {
        localStorage.setItem("contactMessage", messageInput.value);
    });
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = messageInput.value.trim();
        if (!name || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }
        const myWhatsApp = "6281234567890";
        const whatsappMessage = `Halo, saya ${name}.\n\n` +
            `Nomor saya: ${phone}\n\n` +
            `Pesan:\n${message}`;
        const whatsappURL = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
        // Hapus data setelah submit
        localStorage.removeItem("contactName");
        localStorage.removeItem("contactPhone");
        localStorage.removeItem("contactMessage");
    });
}
//# sourceMappingURL=script.js.map