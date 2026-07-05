import { createContext, useContext, useState, useEffect } from "react";
import { initialTasks } from "../data/initialTasks";

// TODO (Member 3 - Data Logic): this file is the single source of truth
// for the whole app. All task data, selected menu, selected category,
// selected priority, and add/edit/delete/complete functions should live here.


// TODO (Member 3): create TaskContext using createContext().
    const TaskContext = createContext();

    export function useTasks() {
        return useContext(TaskContext);
    }

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(initialTasks)
    const [selectedView, setSelectedView] = useState("today")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedPriority, setSelectedPriority] = useState("")
    const [editingTask, setEditingTask] = useState(null)
    const [isFormOpen, setIsFormOpen] = useState(false)

    const addTask = (taskData) => {
        const newTasks = {
            id: Date.now(),
            ...taskData,
            completed: false,
        }
        setTasks([...tasks, newTasks])
    };


    const updateTask = (id,taskData) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? { ...task, ...taskData} : task
            )
        );
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const  toggleComplete = (id) => {
        tasks.map((task) => {
            task.id === id
            ? {...task, completed: !task.completed} : task
        })
    }

    const openAddForm = () => {
        setEditingTask(null);
        setIsFormOpen(true);
    }
    
    const openEditForm = (task) => {
        setEditingTask(task);
        setIsFormOpen(true);
    }

    const closeForm = () => {
        setEditingTask(null)
        setIsFormOpen(false)
    }

    return (
        <TaskContext.Provider
            value={{
                tasks, 
                selectedView,
                selectedCategory,
                editingTask,
                isFormOpen,
                addTask,
                updateTask,
                deleteTask,
                toggleComplete,
                openAddForm,
                openEditForm,
                closeForm
            }}
            >
            {children}
        </TaskContext.Provider>

    )
}
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