import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

function App() {
  return (
    <div class="bg-zinc-900 h-screen text-white">
      <div class="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/view-task" element={<TasksList />} />
            <Route path="/create-task" element={<TasksForm />} />
            <Route path="/edit-task" element={<TasksForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
