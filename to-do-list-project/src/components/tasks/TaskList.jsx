// TODO (Member 2 - Task List): receive filteredTasks as props.

import TaskCard from "./TaskCard";


// TODO (Member 2): map through filteredTasks and render TaskCard.

// TODO (Member 2): if there are no tasks, show a simple empty message.

// TODO (Member 2): show remaining todo count.
// Count only tasks where completed is false.
export default function TaskList ( { filteredTasks = [] }) {
    const remainingCount = filteredTasks.filter(task => !task.completed).length;
    return (
        <div>
            <p>Your Remaining TODOs: {remainingCount}</p>
            { filteredTasks.length === 0 ? "No Task" : filteredTasks.map(task => <TaskCard key={task.id} task={task} /> )}
        </div>
    );
}