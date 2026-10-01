const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menue");

hamburger?.addEventListener("click", (): void => {
  menu?.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const menuLinks =
  document.querySelectorAll<HTMLAnchorElement>(".menue a");

const aboutSection =
  document.querySelector<HTMLElement>("#about");

const skillsSection =
  document.querySelector<HTMLElement>("#skills");

const worksSection =
  document.querySelector<HTMLElement>("#works");

const contactSection =
  document.querySelector<HTMLElement>(".form");


menuLinks.forEach(
  (link: HTMLAnchorElement): void => {
    link.addEventListener(
      "click",
      (event: MouseEvent): void => {
        event.preventDefault();

        const target =
          link.getAttribute("href");

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
      }
    );
  }
);

const talkButton =
  document.querySelector<HTMLButtonElement>(
    ".navbutton button"
  );

talkButton?.addEventListener(
  "click",
  (): void => {
    contactSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
);

const skillCards =
  document.querySelectorAll<HTMLElement>(
    ".skill-card"
  );

const skillDetails =
  document.querySelectorAll<HTMLElement>(
    ".skill-detail .detail"
  );

const defaultSkill =
  document.getElementById("default");


skillCards.forEach(
  (card: HTMLElement): void => {

    card.addEventListener(
      "mouseenter",
      (): void => {

        const skillName =
          card.dataset.skill;

        if (!skillName) {
          return;
        }

        skillDetails.forEach(
          (detail: HTMLElement): void => {
            detail.classList.remove("show");
          }
        );

        defaultSkill?.classList.remove("show");

        const selectedDetail =
          document.getElementById(skillName);

        selectedDetail?.classList.add("show");
      }
    );

  }
);

const contactForm =
  document.querySelector<HTMLFormElement>(".form form");

const nameInput =
  document.getElementById("name") as HTMLInputElement | null;

const phoneInput =
  document.getElementById("num") as HTMLInputElement | null;

const messageInput =
  document.getElementById("message") as HTMLTextAreaElement | null;

if (
  contactForm &&
  nameInput &&
  phoneInput &&
  messageInput
) {

  nameInput.value =
    localStorage.getItem("contactName") ?? "";

  phoneInput.value =
    localStorage.getItem("contactPhone") ?? "";

  messageInput.value =
    localStorage.getItem("contactMessage") ?? "";



  nameInput.addEventListener(
    "input",
    (): void => {
      localStorage.setItem(
        "contactName",
        nameInput.value
      );
    }
  );


  phoneInput.addEventListener(
    "input",
    (): void => {
      localStorage.setItem(
        "contactPhone",
        phoneInput.value
      );
    }
  );


  messageInput.addEventListener(
    "input",
    (): void => {
      localStorage.setItem(
        "contactMessage",
        messageInput.value
      );
    }
  );


  contactForm.addEventListener(
    "submit",
    (event: SubmitEvent): void => {

      event.preventDefault();

      const name =
        nameInput.value.trim();

      const phone =
        phoneInput.value.trim();

      const message =
        messageInput.value.trim();


      if (!name || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }


      const myWhatsApp =
        "6281234567890";


      const whatsappMessage =
        `Halo, saya ${name}.\n\n` +
        `Nomor saya: ${phone}\n\n` +
        `Pesan:\n${message}`;


      const whatsappURL =
        `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(
          whatsappMessage
        )}`;


      window.open(
        whatsappURL,
        "_blank"
      );


      // Hapus data setelah submit
      localStorage.removeItem("contactName");
      localStorage.removeItem("contactPhone");
      localStorage.removeItem("contactMessage");

    }
  );

}