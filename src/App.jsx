import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import Home from './views/home/home';
import Aptitude from "./views/categories/aptitude.jsx";
import Reasoning from "./views/categories/reasoning.jsx";
import Verbal from "./views/categories/verbal.jsx";
import Coding from "./views/categories/coding.jsx";
import Dashboard from './views/dashboard/dashboard.jsx';
import Results from './views/results/results'; 
import About from './views/about/about';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import Profile from './views/profile/profile';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/reasoning" element={<Reasoning />} />
          <Route path="/verbal" element={<Verbal />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
