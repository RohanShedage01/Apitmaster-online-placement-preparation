import React, { useState } from "react";
import reasoningData from "../../Data/reasoningData.json";

const Reasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [view, setView] = useState("topics");

  const topics = Object.keys(reasoningData);
  const data = selectedTopic ? reasoningData[selectedTopic] : null;
  const question = data ? data.questions[currentQ] : null;

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setView("quiz");
  };

  const handleAnswer = (index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 < data.questions.length) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setView("result");
    }
  };

  return (
    <div style={{
      padding: "30px",
      maxWidth: "800px",
      margin: "40px auto",
      fontFamily: "Poppins, sans-serif",
      background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    }}>

      {/* TOPICS */}
      {view === "topics" && (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
            🧩 Reasoning Topics
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px"
          }}>
            {topics.map((topic, i) => (
              <div key={i}
                onClick={() => handleTopicClick(topic)}
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#fff",
                  transition: "0.3s",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ fontSize: "2rem" }}>{reasoningData[topic].icon}</div>
                <p style={{ marginTop: "10px", fontWeight: "600", color: "#444" }}>{topic}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* QUIZ */}
      {view === "quiz" && question && (
        <>
          <button
            onClick={() => setView("topics")}
            style={{
              marginBottom: "20px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              background: "#e2e8f0",
              cursor: "pointer"
            }}
          >
            ← Back
          </button>

          <h3 style={{ marginBottom: "10px", color: "#333" }}>
            {selectedTopic} — Q{currentQ + 1}/{data.questions.length}
          </h3>

          <p style={{ fontSize: "1.2rem", marginBottom: "20px", fontWeight: "500" }}>
            {question.q}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px"
          }}>
            {question.options.map((opt, i) => {
              let bg = "#fff";
              if (answered && i === question.answer) bg = "#d1fae5";
              if (answered && i === selected && i !== question.answer) bg = "#fee2e2";

              return (
                <div key={i}
                  onClick={() => handleAnswer(i)}
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    border: "1px solid #ddd",
                    background: bg,
                    transition: "0.3s",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.05)"
                  }}
                  onMouseEnter={e => !answered && (e.currentTarget.style.background = "#eef2ff")}
                  onMouseLeave={e => !answered && (e.currentTarget.style.background = "#fff")}
                >
                  <b>{["A", "B", "C", "D"][i]}.</b> {opt}
                </div>
              );
            })}
          </div>

          {answered && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                {selected === question.answer
                  ? "✅ Correct!"
                  : `❌ Wrong! Correct: ${question.options[question.answer]}`}
              </p>

              <button
                onClick={handleNext}
                style={{
                  marginTop: "10px",
                  padding: "12px 26px",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                {currentQ + 1 < data.questions.length ? "Next →" : "See Result"}
              </button>
            </div>
          )}
        </>
      )}

      {/* RESULT */}
      {view === "result" && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h2 style={{ marginBottom: "10px" }}>🎉 Quiz Completed</h2>

          <p style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
            Score: <b>{score} / {data.questions.length}</b>
          </p>

          <button
            onClick={() => handleTopicClick(selectedTopic)}
            style={{
              marginRight: "10px",
              padding: "12px 24px",
              background: "#667eea",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            🔁 Retry
          </button>

          <button
            onClick={() => setView("topics")}
            style={{
              padding: "12px 24px",
              background: "#e5e7eb",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            🏠 Topics
          </button>
        </div>
      )}
    </div>
  );
};

export default Reasoning;
