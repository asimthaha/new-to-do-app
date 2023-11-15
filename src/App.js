import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTodoAdd from "./components/NewTodoAdd";
import NewTodoDelete from "./components/NewTodoDelete";
import NewTodoView from "./components/NewTodoView";
import NewTodoSearch from "./components/NewTodoSearch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NewTodoAdd />}></Route>
        <Route path="search" element={<NewTodoSearch />}></Route>
        <Route path="delete" element={<NewTodoDelete />}></Route>
        <Route path="view" element={<NewTodoView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
