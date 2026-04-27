import React, { useState } from "react";
import data from "../data/verbalData.json";

const Verbal = () => {
  const [topicIndex, setTopicIndex] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Topic Selection
  if (topicIndex === null) {
    return (
      <div>
        <h2>Select Topic</h2>
        {data.map((t, i) => (
          <button key={i} onClick={() => setTopicIndex(i)}>
            {t.topic}
          </button>
        ))}
      </div>
    );
  }

  const questions = data[topicIndex].questions;
  const q = questions[qIndex];

  const handleNext = () => {
    if (selected === q.answer) setScore(score + 1);

    if (qIndex + 1 < questions.length) {
      setQIndex(qIndex + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  // Result Page
  if (showResult) {
    return (
      <div>
        <h2>Result</h2>
        <p>{score} / {questions.length}</p>
        <button onClick={() => window.location.reload()}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{data[topicIndex].topic}</h2>

      <h3>{q.question}</h3>

      {q.options.map((opt, i) => (
        <button key={i} onClick={() => setSelected(opt)}>
          {opt}
        </button>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Verbal;