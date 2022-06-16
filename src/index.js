document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  form.addEventListener('sumbit',(e) => {
    e.preventDefault()
    makeTask(e.target['new-task-description'].value)
    form.requestFullscreen()
  })
});
function makeTask (task){
  let li = document.createElement('li');
  let button = document.createDocument('button')
  button.addEventListener('click', deleteTask)
  button.textContent = "Delete"
  li.textContent = task +" "
  li.appendChild(button)
  document.getElementById("tasks").appendChild(li)
}

function deleteTask(e){
  e.target.parentNode.remove()
}