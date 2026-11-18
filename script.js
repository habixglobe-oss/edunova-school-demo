/* =========================================================
   EDUNOVA ACADEMY
   JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuBtn.textContent = isOpen ? "✕" : "☰";

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );

            const nameInput =
                document.getElementById("name");

            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const formData =
                new FormData(contactForm);


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Sending...";

            }


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                Accept:
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    alert(
                        `EduNova Academy: Thank you, ${name}! Your message has been received.`
                );

                    contactForm.reset();

                } else {

                    alert(
                        "Sorry, there was a problem sending your message. Please try again."
                    );

                }


            } catch (error) {

                alert(
                    "Sorry, there was a problem sending your message. Please try again."
                );

            } finally {

                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "Send Message →";

                }

            }

        }
    );

}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= HEADER SHADOW ================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(16, 33, 63, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});