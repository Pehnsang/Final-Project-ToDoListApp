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
import { useTasks } from "../../context/TaskContext";
import { getFilteredTasks } from '../../ultis/taskFilters';
import TaskList from './TaskList';
import { TaskToolbar } from './TaskToolbar';

export default function TaskPage () {
    const {
        tasks,
        selectedView,
        selectedCategory,
        selectedPriority
    } = useTasks();

    const filteredTasks = getFilteredTasks(
        tasks,
        selectedView,
        selectedCategory,
        selectedPriority
    );

    const getTitle = () => {
        switch (selectedView) {
            case "overdue" :
                return "Overdue";
            case "today":
                return "Today";
            case "upcoming": 
                return "Upcoming";
            default: 
                return "Tasks";
        }
    }

    return (
        <div>
           <h1>{getTitle()}</h1>
           <TaskToolbar />
           <TaskLisk tasks={filteredTasks} />
        </div>
    );
};