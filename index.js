//tranform the form-text when clicked
let transform = document.querySelectorAll('.form-text-tranform');
function toggleItem(e){
this.classList.toggle('form-text-tranform')
}
transform.forEach(item=> item.addEventListener('click',toggleItem))


//popup form when button is clicked
let buttons = document.querySelectorAll('.btn-wrapper .btn');
const formContainer = document.querySelector('.form-container');

let closeIcon = document.querySelector('.form-icons .fa-times')
console.log(closeIcon)
function toggleForm(e){
    formContainer.classList.toggle('hide');

}
buttons.forEach(button => button.addEventListener('click', toggleForm));
closeIcon.addEventListener('click',toggleForm)