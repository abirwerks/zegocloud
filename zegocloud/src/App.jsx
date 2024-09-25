import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RoomPage from "./pages/Room";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/room/:roomId" element={<RoomPage />}></Route>
    </Routes>
  );
}

export default App;
