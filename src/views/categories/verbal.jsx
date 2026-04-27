import React, { useState } from "react";
import verbalQuestions from "../data/verbalQuestions.json";
import "./Verbal.css";

const Verbal = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");

  const question = verbalQuestions[current];

  return (
    <div className="container">
      <h2>Verbal Ability</h2>

      <h3>{question.question}</h3>

      {question.options.map((opt, index) => (
        <button
          key={index}
          onClick={() => setSelected(opt)}
          className="option-btn"
        >
          {opt}
        </button>
      ))}

      {selected && (
        <p className="result">
          {selected === question.answer ? "✅ Correct" : "❌ Wrong"}
        </p>
      )}

      <button
        onClick={() => {
          setCurrent(current + 1);
          setSelected("");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Verbal;