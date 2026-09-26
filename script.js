// Vision-based diabetic retinopathy detection — site scripts.
// Hero section needs no JS (its entrance motion is CSS-only and
// already respects prefers-reduced-motion).

// Results section: each result card opens a real <dialog>.
// Escape-to-close is native dialog behavior, no JS needed. Opening,
// the close button, and backdrop-click are all handled explicitly
// below so there's one clear path to follow.
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
    // A click that lands on the <dialog> element itself (not its
    // content) is a backdrop click, since the content fills a
    // smaller centered box inside it.
    if (event.target === dialog) dialog.close();
  });
});