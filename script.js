let tasks = [];

function callMyTask() {
  let myButton = document.getElementById('submit');

  myButton.addEventListener("click", function() {
    let myTextTask = document.getElementById('myTask').value;
    let myListTask = document.getElementById('listMyTasks');
    let createMyTask = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';

    if (tasks.length !== '0') {
      let emptyTask = document.getElementById('emptyTask');

      emptyTask.style.display = 'none';
    }
    
    if (myTextTask == '') {
      return false
    } else {
      label.textContent = myTextTask; 
      createMyTask.appendChild(checkbox);
      createMyTask.appendChild(label);
      myListTask.appendChild(createMyTask);

      tasks.push(myTextTask);
    }

    console.log(tasks);

    document.getElementById('myTask').value = '';
  })
}
