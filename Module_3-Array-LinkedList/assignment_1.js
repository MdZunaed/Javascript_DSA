/* Module 3 Assignment 1: To-Do List Program
● Add a task: Save tasks with a title and status (like "pending" or "done").
● Delete a task: Remove a task by its index or name.
● Mark a task as done: Update the task status to "done".
● View tasks: Show all tasks with their status.
*/

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    // Method to add a task (Student needs to implement)
    addTask(title) {
        this.tasks.push(
            {
                title: `${title}`,
                status: 'pending'
            }
        );
        // Add a task object to the this.tasks array with the given title and initial status of 'pending'.
    }

    // Method to delete a task by index
    deleteTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
        // Delete the task at the given index from the this.tasks array.
    }

    // Method to mark a task as done
    markTaskDone(index) {
        if (this.tasks[index]) {
            this.tasks[index].status = 'done'
        }
        // Change the status of the task at the given index to 'done'.
    }

    // Method to view all tasks
    viewTasks() {
        return this.tasks;
        // Return the this.tasks array to display all tasks.
    }
}

//-----------------------------------------


// Unit tests

function runTests() {
    const list = new ToDoList();

    console.log("Test 1: Add tasks");
    list.addTask("Task 1");
    list.addTask("Task 2");
    console.assert(list.tasks.length === 2, "Failed to add tasks");

    console.log("Test 2: Mark task as done");
    list.markTaskDone(0);
    console.assert(list.tasks[0].status === 'done', "Failed to mark task as done");

    console.log("Test 3: Delete task");
    list.deleteTask(1);
    console.assert(list.tasks.length === 1, "Failed to delete task");

    console.log("Test 4: View tasks");
    const tasks = list.viewTasks();
    console.assert(tasks.length === 1 && tasks[0].title === "Task 1", "Failed to view tasks");

    console.log("All tests passed!");
}

runTests();