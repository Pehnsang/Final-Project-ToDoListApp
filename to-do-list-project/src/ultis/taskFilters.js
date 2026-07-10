export function getFilteredTasks(tasks, selectedView, selectedCategory, selectedPriority) {
  const today = new Date().toISOString().split("T")[0];

  let filteredTasks = tasks.filter(task => {
    if (selectedView === "today") {
      return task.dueDate === today && !task.completed;
    }
    if (selectedView === "upcoming") {
      return task.dueDate > today && !task.completed;
    }
    if (selectedView === "overdue") {
      return task.dueDate < today && !task.completed;
    }
    return true; 
  });

  if (selectedCategory) {
    filteredTasks = filteredTasks.filter(task => task.category === selectedCategory);
  }

  if (selectedPriority) {
    filteredTasks = filteredTasks.filter(task => task.priority === selectedPriority);
  }

  return filteredTasks;
}