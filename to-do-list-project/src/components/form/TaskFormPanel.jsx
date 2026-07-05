// TODO (Member 3 - Form Panel): create the right-side panel.

// TODO (Member 3): use useTasks() to get:
// isFormOpen
// editingTask

// TODO (Member 3): show TaskForm inside this panel.

// TODO (Member 3): if no form is open, either show an empty disabled form
// or a simple message like "Select or add a task".

import TaskProvider, { useTasks } from "../../context/TaskContext";
import TaskForm from "./TaskForm";

export default function TaskFormPanel() {
   const {isFormOpen, editingTask} = useTasks();

    return (
        <div>
            <aside className="task-form-panel">
        <h2>Task:</h2>

        {isFormOpen ? (
            <TaskForm />
        ) : (
            <p className="empty-form-message">
                Click Add New Task or edit a task.
            </p>
        )}
            </aside>
        </div>
    );
}