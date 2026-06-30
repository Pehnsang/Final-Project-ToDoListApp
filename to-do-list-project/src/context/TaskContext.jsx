// TODO (Member 3 - Data Logic): this file is the single source of truth
// for the whole app. All task data, selected menu, selected category,
// selected priority, and add/edit/delete/complete functions should live here.

// TODO (Member 3): create TaskContext using createContext().

// TODO (Member 3): create and export useTasks().
// Keep this name. App.jsx, Sidebar.jsx, TaskPage.jsx, TaskCard.jsx,
// and TaskForm.jsx will all use useTasks() to read or update app data.

// TODO (Member 3): inside TaskProvider, create these states:
// tasks
// selectedView
// selectedCategory
// selectedPriority
// editingTask
// isFormOpen

// TODO (Member 3): create these functions:
// addTask(taskData)
// updateTask(id, taskData)
// deleteTask(id)
// toggleComplete(id)
// openAddForm()
// openEditForm(task)
// closeForm()

// TODO (Member 3): wrap children with TaskContext.Provider
// and pass all states/functions in the value object.