const logbtn = document.querySelector('#login');
const logform = document.querySelector('#login-form');

console.log(logbtn);
console.log(logform);

logbtn.addEventListener('click',() => {
  logform.classList.toggle('active');
})