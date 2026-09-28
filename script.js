// Results section: each result card opens a real <dialog>.
// Native dialog behavior, no extra JS needed.
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
    if (event.target === dialog) dialog.close();
  });
});