const counterValue = document.getElementById('value');
const minusValue = document.querySelector('[data-action="decrement"]');
const plusValue = document.querySelector('[data-action="increment"]');

minusValue.addEventListener('click', onMinusValueClick);

function onMinusValueClick() {
    counterValue.innerHTML = Number(counterValue.innerHTML) -1;

}
plusValue.addEventListener('click', onPlusValueClick);

function onPlusValueClick() {
    counterValue.innerHTML = Number(counterValue.innerHTML) +1;
 if (counterValue.innerHTML == 5) {
    alert('WOW, U ALREADY CLICK 5 TIMES, Continue PLZ');
 }
    
}
