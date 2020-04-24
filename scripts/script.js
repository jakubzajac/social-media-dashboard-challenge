const colorModeSwitch = document.querySelector('.switch-mode__toggle');
colorModeSwitch.addEventListener('click', () => {
  colorModeSwitch.classList.toggle('active');
  document.body.classList.toggle('dark');
});