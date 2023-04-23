const inputArea = document.getElementById('name-input');
const outputArea = document.getElementById('name-output');

inputArea.addEventListener('input', grabInput);
function grabInput(event) {
  if (inputArea.value === '') {
    outputArea.textContent = 'Anonymous';
  } else {
    outputArea.textContent = event.currentTarget.value;
  }
}