const counterValue = document.getElementById('value');
const minusValue = document.querySelector('[data-action="decrement"]');
const plusValue = document.querySelector('[data-action="increment"]');
let count = 0;
minusValue.addEventListener('click', onMinusValueClick);

function onMinusValueClick() {
    count -= 1;
    counterValue.innerHTML = count;

}
plusValue.addEventListener('click', onPlusValueClick);

function onPlusValueClick() {
    count += 1;
    counterValue.innerHTML = count;
 if (counterValue.innerHTML == 5) {
    alert('WOW, U ALREADY CLICK 5 TIMES, Continue PLZ');
 }
    
}
