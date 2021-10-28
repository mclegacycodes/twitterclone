let transform = document.querySelectorAll('.form-text-tranform');
function toggleItem(e){
this.classList.toggle('form-text-tranform')
}
transform.forEach(item=> item.addEventListener('click',toggleItem))
