// Sticky section nav
// marks the section currently in view with aria-current="location"
// so both sighted and screen-reader users know where they are on the page.
(() => {
  const sections = document.querySelectorAll("main > section[id]");
  const navLinks = document.querySelectorAll(".site-nav-list a, .home-link");

  const linkFor = (id) => {
    if (id === "hero") return document.querySelector(".home-link");
    return document.querySelector(`.site-nav-list a[href="#${id}"]`);
  };

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = linkFor(entry.target.id);
        if (!link) return;
        navLinks.forEach((l) => l.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "location");
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();

// Results section: each result card opens a real <dialog>.
document.querySelectorAll(".result-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dialog = document.getElementById(trigger.dataset.dialog);
    if (dialog) dialog.showModal();
  });
});

document.querySelectorAll(".dialog-close").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("dialog").close();
  });
});

document.querySelectorAll(".result-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close(); // backdrop click
  });
});