// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Button to add task
    const taskInput = document.getElementById("task-input"); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list for tasks

    // Function to add a new task
    function addTask() {
        // Get the task text and remove any leading/trailing whitespace
        const taskText = taskInput.value.trim();

        // Check if the task text is empty
        if (taskText === '') {
            alert('Please enter a task'); // Alert the user if no task was entered
            return; // Exit the function early if no valid task
        }

        // Create a new list item for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText; // Set the task text
        newTask.classList.add('task-item'); // Add a class to the task item for styling

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.classList.add('remove-btn'); // Add a class for styling the button

        // Add the remove button to the task item
        newTask.appendChild(removeButton);

        // Add the new task to the task list
        taskList.appendChild(newTask);

        // Set up the remove functionality
        removeButton.onclick = function () {
            newTask.remove(); // Remove the entire task item when clicked
        };

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add a new task when the add button is clicked
    addButton.addEventListener('click', addTask);

    // Add a new task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(); // Call addTask if "Enter" key is pressed
        }
    });
});
