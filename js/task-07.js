const fontSizeControl = document.getElementById('font-size-control');
const textForZoom = document.getElementById('text');

fontSizeControl.addEventListener('input', onFontSizeControl);
function onFontSizeControl(evt) {
  textForZoom.style.fontSize = evt.currentTarget.value + 'px';
}