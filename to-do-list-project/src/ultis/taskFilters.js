export function getFilteredTasks(tasks, selectedView) {
  const today = new Date().toISOString().split("T")[0];

  if (selectedView === "today") {
    return tasks.filter(task => task.dueDate === today && !task.completed);
  }

  if (selectedView === "upcoming") {
    return tasks.filter(task => task.dueDate > today && !task.completed);
  }

  if (selectedView === "overdue") {
    return tasks.filter(task => task.dueDate < today && !task.completed);
  }

  return tasks;
}