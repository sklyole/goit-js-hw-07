function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('boxes');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(box);
  }

  boxesContainer.innerHTML = '';

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('boxes');
  boxesContainer.innerHTML = '';
}

const createButton = controls.querySelector('[data-create]');
const input = document.querySelector('input');
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});
const destroyButton = controls.querySelector('[data-destroy]');
destroyButton.addEventListener('click', destroyBoxes);
