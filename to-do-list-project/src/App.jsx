import { useState } from "react";
import AppLayout from "./components/layout/AppLayout";
import TaskPage from "./components/tasks/TaskPage";
import TaskFormPanel from "./components/form/TaskFormPanel";
import { initialTasks } from "./data/initialTasks";
import "./styles/app.css";

function App() {
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
      setTasks(tasks.map(task =>
        task.id === editingTask.id ? { ...task, ...taskData } : task
      ));
    } else {
      const newTask = {
        id: Date.now(),
        ...taskData,
        completed: false
      };

      setTasks([...tasks, newTask]);
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
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }

  function handleDiscard() {
    setIsFormOpen(false);
    setEditingTask(null);
  }

  return (
    <AppLayout
      selectedView={selectedView}
      onSelectView={setSelectedView}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      selectedPriority={selectedPriority}
      onSelectPriority={setSelectedPriority}
      mainContent={
        <TaskPage
          selectedView={selectedView}
          tasks={tasks}
          onAddClick={handleAddClick}
          onToggleComplete={handleToggleComplete}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      }
      rightPanel={
        <TaskFormPanel
          isOpen={isFormOpen}
          editingTask={editingTask}
          onSave={handleSaveTask}
          onDiscard={handleDiscard}
        />
      }
    />
  );
}

export default App;