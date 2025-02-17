function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

changeColorButton.addEventListener('click', function () {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;

  colorSpan.textContent = randomHexColor;
});
