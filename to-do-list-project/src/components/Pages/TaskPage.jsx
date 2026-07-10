// TODO (Member 2 - Task Page): create the center task area.

// TODO (Member 2): use useTasks() to get:
// tasks
// selectedView
// selectedCategory
// selectedPriority

// TODO (Member 2): use getFilteredTasks() from taskFilters.js.

// TODO (Member 2): show page title based on selectedView.
// Example: today = "Today", overdue = "Overdue".

// TODO (Member 2): render TaskToolbar and TaskList.
import { useTasks } from "../context/TaskContext";
import { getFilteredTasks } from '../ultis/taskFilters';
import TaskList from '../components/tasks/TaskList';
import { TaskToolbar } from '../components/tasks/TaskToolbar';

export default function TaskPage () {
    const {
        tasks,
        selectedCategory,
        selectedPriority
    } = useTasks();

    const filteredTasks = getFilteredTasks(
        tasks,
        "all",
        selectedCategory,
        selectedPriority
    );

    return (
        <div>
           <h1>Task</h1>
           <TaskToolbar />
           <TaskList filteredTasks={filteredTasks} />
        </div>
    );
};