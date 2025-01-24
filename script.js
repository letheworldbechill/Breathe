const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const darkModeToggle = document.getElementById('darkModeToggle');
const settingsPage = document.getElementById('settingsPage');
const saveSettings = document.getElementById('saveSettings');
const inhaleTimeInput = document.getElementById('inhaleTime');
const holdTimeInput = document.getElementById('holdTime');
const exhaleTimeInput = document.getElementById('exhaleTime');
const motivation = document.getElementById('motivation');

let step = 0;

const motivationalMessages = [
  "Du machst das großartig!",
  "Fühle, wie dein Körper zur Ruhe kommt.",
  "Atme tief ein und lasse los.",
  "Eine Pause ist wichtig für dich."
];

function animateBreathingCustom(inhale, hold, exhale) {
  function breathingStep() {
    if (step === 0) {
      instructions.textContent = `Atme ein... (${inhale} Sekunden)`;
      circle.style.transition = `transform ${inhale}s ease-in-out, background-color ${inhale}s ease-in-out`;
      circle.style.transform = 'scale(1.0)';
      circle.style.backgroundColor = '#32CD32';
      step = 1;
      setTimeout(breathingStep, inhale * 1000);
    } else if (step === 1) {
      instructions.textContent = `Halte den Atem an... (${hold} Sekunden)`;
      circle.style.transition = `background-color ${hold}s ease-in-out`;
      circle.style.backgroundColor = '#FFD700';
      step = 2;
      setTimeout(breathingStep, hold * 1000);
    } else if (step === 2) {
      instructions.textContent = `Atme aus... (${exhale} Sekunden)`;
      circle.style.transition = `transform ${exhale}s ease-in-out, background-color ${exhale}s ease-in-out`;
      circle.style.transform = 'scale(0.5)';
      circle.style.backgroundColor = '#FF8C00';
      motivation.textContent = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      step = 0;
      setTimeout(breathingStep, exhale * 1000);
    }
  }
  breathingStep();
}

startButton.addEventListener('click', () => {
  const inhaleTime = parseInt(inhaleTimeInput.value, 10) || 4;
  const holdTime = parseInt(holdTimeInput.value, 10) || 6;
  const exhaleTime = parseInt(exhaleTimeInput.value, 10) || 8;

  settingsPage.style.display = 'none';
  instructions.textContent = 'Bereit? Los geht’s!';
  motivation.textContent = '';
  animateBreathingCustom(inhaleTime, holdTime, exhaleTime);
});

settingsButton.addEventListener('click', () => {
  settingsPage.style.display = 'flex';
});

saveSettings.addEventListener('click', () => {
  settingsPage.style.display = 'none';
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
