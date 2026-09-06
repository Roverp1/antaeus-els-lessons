(() => {
  const trigger = document.querySelector(".lesson-header .meta");
  const lockedAnswers = document.querySelectorAll("[data-tutor-answer]");

  if (!trigger || lockedAnswers.length === 0) return;

  let presses = 0;
  let resetTimer;

  trigger.addEventListener("click", () => {
    window.clearTimeout(resetTimer);
    presses += 1;

    if (presses < 5) {
      resetTimer = window.setTimeout(() => {
        presses = 0;
      }, 4000);
      return;
    }

    lockedAnswers.forEach((answer) => {
      answer.hidden = false;
    });

    document.querySelectorAll(".answer-key[data-partial-answers] summary").forEach((summary) => {
      summary.textContent = "Answers";
    });

    presses = 0;
  });
})();
