let currentStep = 0;

/* ================= CHANGE MODULE ================= */
function goToStep(step) {
  const modules = document.querySelectorAll(".module");
  const steps = document.querySelectorAll(".step");

  // Hide all modules
  modules.forEach(m => m.classList.remove("active"));

  // Show selected module
  const activeModule = document.getElementById(`module${step}`);
  if (activeModule) activeModule.classList.add("active");

  // Update progress bar
  steps.forEach(s => s.classList.remove("active"));
  const activeStep = document.querySelector(`[data-step="${step}"]`);
  if (activeStep) {
    activeStep.classList.add("active");
    activeStep.classList.remove("locked");
  }

  currentStep = step;
}

/* ================= COMPLETE STEP ================= */
function completeStep(step) {
  const stepEl = document.querySelector(`[data-step="${step}"]`);
  if (stepEl) stepEl.classList.add("completed");
}

/* ================= UNLOCK STEP ================= */
function unlockStep(step) {
  const stepEl = document.querySelector(`[data-step="${step}"]`);
  if (stepEl) stepEl.classList.remove("locked");
}

/* ================= OPTIONAL: CLICK NAVIGATION ================= */
document.querySelectorAll(".step").forEach(stepEl => {
  stepEl.addEventListener("click", () => {
    if (!stepEl.classList.contains("locked")) {
      const step = stepEl.dataset.step;
      goToStep(step);
    }
  });
});
