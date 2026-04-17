
// TOGGLE NAVIGATION MENU
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
}


// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// PROJECT FILTER
function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");

    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}


// LIGHTBOX (IMAGE MODAL)
const images = document.querySelectorAll("#projects img");

// Create modal dynamically
const modal = document.createElement("div");
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0,0,0,0.8)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

const modalImg = document.createElement("img");
modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";

modal.appendChild(modalImg);
document.body.appendChild(modal);

// Open modal
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close modal
modal.addEventListener("click", () => {
    modal.style.display = "none";
});


// FORM VALIDATION
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        alert("Name is required");
        valid = false;
    }

    // Email validation
    if (!email.value.includes("@")) {
        alert("Enter a valid email");
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        alert("Message cannot be empty");
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});


// REAL-TIME FEEDBACK
document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", () => {
        if (field.value.trim() === "") {
            field.style.borderColor = "red";
        } else {
            field.style.borderColor = "green";
        }
    });
});