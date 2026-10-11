// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

siteNav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  })
);

// Region filter (home page only)
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".grid .card");
const emptyState = document.querySelector(".empty-state");

chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");

    const filter = chip.dataset.filter;
    let visible = 0;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.region === filter;
      card.hidden = !match;
      if (match) visible++;
    });
    emptyState.hidden = visible > 0;
  })
);

// Newsletter form (demo only — no backend)
const form = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thanks! You're on the list for Sunday's dish.";
    form.reset();
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
