import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import { Calculator, Brain, BookOpen, Code } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Aptitude",
      description: "Improve quantitative skills",
      path: "/aptitude",
      icon: <Calculator size={40} />,
    },
    {
      id: 2,
      title: "Reasoning",
      description: "Boost logical thinking ability",
      path: "/reasoning",
      icon: <Brain size={40} />,
    },
    {
      id: 3,
      title: "Verbal Ability",
      description: "Enhance grammar and vocabulary",
      path: "/verbal",
      icon: <BookOpen size={40} />,
    },
    {
      id: 4,
      title: "Coding",
      description: "Practice programming questions",
      path: "/coding",
      icon: <Code size={40} />,
    },
  ];
  return (
    <div>
      {/* <Navbar active="dashboard"/> */}

      <h1 className="title">Dashboard</h1>

      <div className="card-container">
        {cards.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="icon-container">{item.icon}</div>

              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <button onClick={() => navigate(item.path)}>Start</button>
            </div>
          );
        })}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Dashboard;
