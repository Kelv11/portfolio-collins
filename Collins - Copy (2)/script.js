const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-small"
    );
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});

/*--------------services------------*/
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const cards = document.querySelectorAll(".service-card");
  console.log("Number of cards found:", cards.length);

  cards.forEach((card, index) => {
    const readMoreBtn = card.querySelector(".read-more");
    const expandedContent = card.querySelector(".expanded-content");

    console.log(`Card ${index + 1}:`, {
      hasReadMoreBtn: !!readMoreBtn,
      hasExpandedContent: !!expandedContent,
    });

    if (readMoreBtn && expandedContent) {
      readMoreBtn.addEventListener("click", (e) => {
        console.log(`Read more button clicked for card ${index + 1}`);
        e.stopPropagation();
        card.classList.toggle("expanded");
        expandedContent.classList.toggle("hidden");
        expandedContent.classList.toggle("show");
        readMoreBtn.textContent = expandedContent.classList.contains("show")
          ? "Read less"
          : "Read more";
        console.log(
          "Expanded content visibility:",
          expandedContent.classList.contains("show")
        );
      });
    }
  });
});

/*--------------------date-update---------*/
document.getElementById("current-year").textContent = new Date().getFullYear();
