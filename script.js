const tasks = [];
let count = 0;

function callMyTask() {
  let myButton = document.getElementById('submit');

  myButton.addEventListener("click", function() {
    let myTextTask = document.getElementById('myTask').value;
    let myListTask = document.getElementById('listMyTasks');
    let createMyTask = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let numberTasksClosed = document.getElementById('numberTasksClosed');
    
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.id = 'checkboxId';

    checkbox.addEventListener('change', function() {
      if(this.checked) {

        let taskIndex = tasks.indexOf(label.textContent);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          count += 1;
          numberTasksClosed.textContent = count;
        }

        createMyTask.remove();

        if (tasks.length === 0) {
          emptyTask.style.display = 'block';
        }
      }
    });

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
    console.log(count);

    document.getElementById('myTask').value = '';
  })
}


function showTasksCLosed() {
  numberTasksClosed.addEventListener('click', () => {
    let containerClosed = document.getElementById('containerClosed');

    containerClosed.style.display = 'block';
  })
}