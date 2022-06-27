import "./App.css";
import { useGlobalContext } from "./context";
import Nav from "./components/nav";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { title } = useGlobalContext();
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
