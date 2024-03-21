/* document.addEventListener ("DOMContentLoaded", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = " ";

        tasks.forEach(function(tasks, index) {
            let li = document.createElement("li");
            li.textContent = task.text;
            if ()
        })
    }
})
 */





document.addEventListener('DOMContentLoaded', function() {
    // Retrieve tasks from local storage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to render tasks
    function renderTasks() {
      var taskList = document.getElementById('taskList');
      taskList.innerHTML = ''; // Clear previous tasks
  
      tasks.forEach(function(task, index) {
        var li = document.createElement('li');
        li.textContent = task.text;
  
        // Add a button to toggle completion status
        var completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Completed' : 'Uncompleted';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', function(event) {
          event.stopPropagation(); // Prevent li click event from firing
          toggleTaskCompletion(index);
          updateButtonStyle(completeButton, task.completed); // Update button style
        });
        li.appendChild(completeButton);
  
        // Add click event listener to toggle completion status
        li.addEventListener('click', function() {
          toggleTaskCompletion(index);
          updateButtonStyle(completeButton, task.completed); // Update button style
        });
  
        // Add completed class if task is completed
        if (task.completed) {
          li.classList.add('completed');
          updateButtonStyle(completeButton, task.completed); // Update button style
        }
  
        taskList.appendChild(li);
      });
  
      saveTasksToLocalStorage(); // Save tasks to local storage after rendering
    }
  
    // Function to add a new task
    function addTask(text) {
      tasks.push({ text: text, completed: false });
      renderTasks();
    }
  
    // Function to remove a task
    function removeTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  
    // Function to toggle task completion
    function toggleTaskCompletion(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  
    // Function to update button style
    function updateButtonStyle(button, completed) {
      button.textContent = completed ? 'Completed' : 'Uncompleted';
      button.style.backgroundColor = completed ? '#28a745' : '#007bff';
      button.style.fontSize = completed ? '10px' : 'inherit';
      button.style.paddingLeft = '5px'; // Add left padding for spacing
    }
  
    // Function to clear completed tasks
    function clearCompletedTasks() {
      tasks = tasks.filter(function(task) {
        return !task.completed;
      });
      renderTasks();
    }
  
    // Function to save tasks to local storage
    function saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Event listener for adding a new task
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      var taskInput = document.getElementById('taskInput');
      var text = taskInput.value.trim();
      if (text !== '') {
        addTask(text);
        taskInput.value = ''; // Clear input field after adding task
      } else {
        alert('Please enter a task.');
      }
    });
  
    // Event listener for clearing completed tasks
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
      clearCompletedTasks();
    });
  
    // Render tasks on page load
    renderTasks();
  });
  