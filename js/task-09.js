
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyOfPage = document.querySelector('body');
const colorName = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');



colorChangeBtn.addEventListener('click', btnColorChange);
function btnColorChange() {
  colorName.textContent = getRandomHexColor();
  bodyOfPage.style.backgroundColor = getRandomHexColor();
}
