import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aptitude from "./views/categories/aptitude.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aptitude />} />
        <Route path="/aptitude" element={<Aptitude />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;