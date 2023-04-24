
const userLoginForm = document.querySelector('.login-form');

userLoginForm.addEventListener('submit', onLoginBtnClick);
function onLoginBtnClick(evt) {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' && password.value === '') {
    alert('All input forms must contain data');
  } else {
    const formData = { email: email.value, password: password.value };
    console.log('formData: ', formData);
    evt.currentTarget.reset();
  }
}