import "./App.css";
import { useGlobalContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { title } = useGlobalContext();
  return (
    <div className='App'>
      <h1>{title} TECH</h1>
    </div>
  );
}

export default App;
