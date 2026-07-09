// TODO (Member 1 - Sidebar): create the left sidebar.

// TODO (Member 1): use useTasks() from TaskContext.jsx.

// TODO (Member 1): show task navigation:
// All Task
// Overdue
// Today
// Upcoming

// TODO (Member 1): when user clicks a menu item,
// call setSelectedView("all"), setSelectedView("overdue"),
// setSelectedView("today"), or setSelectedView("upcoming").

// TODO (Member 1): show category list:
// School
// Work
// Add New Category

// TODO (Member 1): show priority list:
// Urgent & Important
// Urgent & Not Important
// Not Urgent & Important

import { useTasks } from "../../context/TaskContext";
import "./Sidebar.css";


function Sidebar() {

  const {
    selectedView,
    setSelectedView,
    selectedCategory,
    setSelectedCategory,
    selectedPriority,
    setSelectedPriority
  } = useTasks();


  return (
    <aside className="sidebar">

      {/* Task Navigation */}
      <section>
        <h4>Task</h4>
        <button
          className={selectedView === "all" ? "active" : ""}
          onClick={() => setSelectedView("all")}
        >
          All Task
        </button>

        <button
          className={selectedView === "overdue" ? "active" : ""}
          onClick={() => setSelectedView("overdue")}
        >
          Overdue
        </button>

        <button
          className={selectedView === "today" ? "active" : ""}
          onClick={() => setSelectedView("today")}
        >
          Today
        </button>

        <button
          className={selectedView === "upcoming" ? "active" : ""}
          onClick={() => setSelectedView("upcoming")}
        >
          Upcoming
        </button>

      </section>


      {/* Categories */}
      <section>
        <h4>Category</h4>
        <button
          className={selectedCategory === "School" ? "active" : ""}
          onClick={() => setSelectedCategory("School")}
        >
          School
        </button>

        <button
          className={selectedCategory === "Work" ? "active" : ""}
          onClick={() => setSelectedCategory("Work")}
        >
          Work
        </button>

        <button>
          + Add New Category
        </button>

      </section>


      {/* Priority */}
      <section>
        <h4>Priority</h4>
        
        <button
          className={
            selectedPriority === "Urgent & Important"
            ? "active"
            : ""
          }
          onClick={() =>
            setSelectedPriority("Urgent & Important")
          }
        >
          Urgent & Important
        </button>

        <button
          className={
            selectedPriority === "Urgent & Not Important"
            ? "active"
            : ""
          }
          onClick={() =>
            setSelectedPriority("Urgent & Not Important")
          }
        >
          Urgent & Not Important
        </button>

        <button
          className={
            selectedPriority === "Not Urgent & Important"
            ? "active"
            : ""
          }
          onClick={() =>
            setSelectedPriority("Not Urgent & Important")
          }
        >
          Not Urgent & Important
        </button>

      </section>
    </aside>
  );
}


export default Sidebar;