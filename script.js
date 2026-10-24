// AI-assisted starter example: review and explain these DOM event handlers.
const themeButton = document.querySelector('#theme-toggle');
const yearElement = document.querySelector('#year');

themeButton.addEventListener('click', () => {
  const darkModeIsEnabled = document.documentElement.dataset.theme === 'dark';

  if (darkModeIsEnabled) {
    document.documentElement.dataset.theme = 'light';
    themeButton.textContent = 'Dark mode';
    themeButton.setAttribute('aria-pressed', 'false');
  } else {
    document.documentElement.dataset.theme = 'dark';
    themeButton.textContent = 'Light mode';
    themeButton.setAttribute('aria-pressed', 'true');
  }
});

yearElement.textContent = new Date().getFullYear();
