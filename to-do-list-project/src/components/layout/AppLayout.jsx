// TODO (Member 1 - Layout): create the main app layout.

// TODO (Member 1): layout should have:
// TopBar at the top
// Sidebar on the left
// TaskPage in the center
// TaskFormPanel on the right

// TODO (Member 1): import and use:
// TopBar
// Sidebar
// TaskPage
// TaskFormPanel

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import TaskPage from "../tasks/TaskPage";
import TaskFormPanel from "../form/TaskFormPanel";
import "./AppLayout.css";


function AppLayout() {

  return (
    <div className="app-layout">
      <TopBar />
     
      <div className="layout-body">
        <Sidebar />

        <main className="task-area">
          <TaskPage />
        </main>

        <aside className="form-area">
          <TaskFormPanel />
        </aside>
      
      </div>
    </div>

  );

}


export default AppLayout;