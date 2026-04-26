import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import Home from './views/home/home';
<<<<<<< HEAD
import Results from './views/results/results';
=======
import Aptitude from "./views/categories/aptitude.jsx";
import dashboard from './views/dashboard/dashboard.jsx';
>>>>>>> aa47276f522ece2aad77c2727c5f390a61eb6cb5

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
