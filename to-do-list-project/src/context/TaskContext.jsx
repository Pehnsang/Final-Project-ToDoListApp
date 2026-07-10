import { createContext, useContext, useState } from "react";
import { initialTasks } from "../data/initialTasks"; // adjust path if needed

const TaskContext = createContext();

export function TaskProvider({ children }) {
  // Move ALL of this from App.jsx into here:
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedView, setSelectedView] = useState("today");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleAddClick() {
    setEditingTask(null);
    setIsFormOpen(true);
  }

  function handleSaveTask(taskData) {
    if (editingTask) {
      setTasks(tasks.map(task => task.id === editingTask.id ? { ...task, ...taskData } : task));
    } else {
      setTasks([...tasks, { id: Date.now(), ...taskData, completed: false }]);
    }
    setIsFormOpen(false);
    setEditingTask(null);
  }

  function handleEditTask(task) {
    setEditingTask(task);
    setIsFormOpen(true);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleToggleComplete(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function handleDiscard() {
    setIsFormOpen(false);
    setEditingTask(null);
  }

  return (
    <TaskContext.Provider value={{
      tasks, selectedView, selectedCategory, selectedPriority, 
      editingTask, isFormOpen,
      setSelectedView, setSelectedCategory, setSelectedPriority,
      addTask: handleAddClick,
       updateTask: handleSaveTask,
    deleteTask: handleDeleteTask,
      toggleComplete: handleToggleComplete,
       openAddForm: handleAddClick, 
      openEditForm: handleEditTask,
       closeForm: handleDiscard
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}