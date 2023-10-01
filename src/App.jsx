import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="bg-zinc-900 h-screen text-white">
      <div class="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/view-task"  />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
