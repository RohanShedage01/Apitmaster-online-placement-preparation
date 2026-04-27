import React, { useState } from "react";
import codingQuestions from "../data/codingQuestions.json";
import "./Coding.css";

const Coding = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <h2>Coding Practice</h2>

      <div className="list">
        {codingQuestions.map((q) => (
          <button
            key={q.id}
            onClick={() => setSelected(q)}
            className="question-btn"
          >
            {q.question}
          </button>
        ))}
      </div>

      {selected && (
        <div className="answer-box">
          <h3>Answer:</h3>
          <pre>{selected.answer}</pre>
        </div>
      )}
    </div>
  );
};

export default Coding;
