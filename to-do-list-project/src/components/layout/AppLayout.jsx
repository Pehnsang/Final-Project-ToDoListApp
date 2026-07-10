// 1. Remove the useTasks import from Sidebar.jsx, you won't need it anymore.
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import TaskPage from "../tasks/TaskPage";
import TaskFormPanel from "../form/TaskFormPanel";

export default function AppLayout({ 
  selectedView, 
  onSelectView, 
  selectedCategory, 
  onSelectCategory, 
  selectedPriority, 
  onSelectPriority,
  mainContent, 
  rightPanel   
}) {
  return (
    <div className="app-layout">
      <TopBar />
      <div className="layout-body">
        <Sidebar 
          selectedView={selectedView}
          onSelectView={onSelectView}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          selectedPriority={selectedPriority}
          onSelectPriority={onSelectPriority}
        />

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