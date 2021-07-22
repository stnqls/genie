const logbtn = document.querySelector('#login');
let logform = document.querySelector('#login-form');

logbtn.addEventListener('click',() => {
  logform.classList.toggle('active');
})
