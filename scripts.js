function getValidStatus(taskNumber) {
  const validStatuses = ["todo", "doing", "done"];
  let status;

  do {
      status = prompt(`Enter the status for Task ${taskNumber}:\n("todo", "doing", "done")`).trim().toLowerCase();
      if (!validStatuses.includes(status)) {
          alert("Invalid status! Please enter only: 'todo', 'doing', or 'done'.");
      }
  } while (!validStatuses.includes(status));

  return status;
}

const taskList = [];
const maxTaskAllowed = 5;

function getLimitedInput(promptText, maxLength) {
  let input;
  do {
      input = prompt(promptText).trim();
      if (!input || input.length > maxLength) {
          alert(`Input too long! Please keep it under ${maxLength} characters.`);
      }
  } while (!input || input.length > maxLength);

  return input;
}

function createTask(taskId) {
  const title = getLimitedInput(`Enter the title for Task ${taskId}:`, 50);
  const description = getLimitedInput(`Enter the description for Task ${taskId}:`, 100);
  const status = getValidStatus(taskId);

  return { id: taskId, title, description, status };
}

taskList.push(createTask(1));
taskList.push(createTask(2));

while (taskList.length < maxTaskAllowed) {
  const addTask = confirm("Would you like to add a new task?");
  if (!addTask) break;

  taskList.push(createTask(taskList.length + 1));
}

if (taskList.length === maxTaskAllowed) {
  alert("There are enough tasks on your board, please check them in the console.");
}

console.log("\n🚀 All Tasks 🚀");
taskList.forEach(task => {
  console.log(`#${task.id}: ${task.title} (${task.status}) - ${task.description}`);
});

const completedTasks = taskList.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  console.log("\n✅ Completed Tasks ✅");
  completedTasks.forEach(task => console.log(`✔ ${task.title} (${task.status})`));
} else {
  console.log("\n⚠ No tasks completed yet—let’s get to work!");
}
