// TODO (Member 3 - Task Form): create form inputs for adding/editing tasks.

import { useEffect,useState } from "react";
import { useTasks } from "../../context/TaskContext";
// TODO (Member 3): use useTasks() to get
export default function TaskForm() {
    const {editingTask, addTask, updateTask, closeForm} = useTasks();

const [title, setTitle] = useState("")
const [dueDate, setDueDate] = useState("")
const [category, setCategory] = useState("School")
const [priority, setPriority] = useState("Urgent & Important");

useEffect(() => {
    if (editingTask) {
        setTitle(editingTask.title);
        setDueDate(editingTask.dueDate);
        setCategory(editingTask.category);
        setPriority(editingTask.priority);
    } else {
        setTitle("");
        setDueDate("");
        setCategory("School");
        setPriority("Urgent & Important");
    }
}, [editingTask]);

function handleSave(e) {
    event.preventDefault();

const formData = {
    title,
    dueDate,
    category,
    priority
};

if (editingTask) {
    updateTask(editingTask.id, formData)
} else {
    addTask(formData);
}

    closeForm();
}

return (
    <form className="task-form" onSubmit={handleSave}>
        <label>
            Task Name
            <input 
            type="text"
            placeholder="Example..." 
            value={title}
            onChange={(e) => setTitle(event.target.value)} />
        </label>

        <label>
            Due Date
            <input 
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(event.target.value)}
            />
        </label>

        <label>
            Category
            <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}>

            <option value="School">School</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            </select>
        </label>

        <label>
            Priority
            <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}>

            <option value="Urgent & Important">Urgent & Important</option>
            <option value="Urgent but Not Important">Urgent but Not Important</option>
            <option value="Not Urgent">Not Urgent</option>
            </select>
        </label>

        <div className="form-action">
            <button type="submitt">Save</button>
            <button type="button" onClick={closeForm}>Discard</button>
        </div>
    </form>
);
}

// editingTask
// addTask
// updateTask
// closeForm

// TODO (Member 3): create local form state for:
// title
// dueDate
// category
// priority

// TODO (Member 3): if editingTask exists, fill the form with its data.

// TODO (Member 3): on Save:
// if editingTask exists, call updateTask(editingTask.id, formData)
// else call addTask(formData)

// TODO (Member 3): on Discard, call closeForm().