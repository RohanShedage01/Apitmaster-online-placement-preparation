import React, { useState } from "react";
import data from "../data/codingData.json";

const Coding = () => {
  const [topicIndex, setTopicIndex] = useState(null);
  const [qIndex, setQIndex] = useState(null);

  // Topic Selection
  if (topicIndex === null) {
    return (
      <div>
        <h2>Select Coding Topic</h2>
        {data.map((t, i) => (
          <button key={i} onClick={() => setTopicIndex(i)}>
            {t.topic}
          </button>
        ))}
      </div>
    );
  }

  const questions = data[topicIndex].questions;

  // Question List
  if (qIndex === null) {
    return (
      <div>
        <h3>{data[topicIndex].topic}</h3>

        {questions.map((q, i) => (
          <button key={i} onClick={() => setQIndex(i)}>
            {q.question}
          </button>
        ))}

        <button onClick={() => setTopicIndex(null)}>
          Change Topic
        </button>
      </div>
    );
  }

  const q = questions[qIndex];

  // Answer View
  return (
    <div>
      <h3>{q.question}</h3>
      <pre>{q.answer}</pre>

      <button onClick={() => setQIndex(null)}>Back</button>
      <button onClick={() => setTopicIndex(null)}>Change Topic</button>
    </div>
  );
};

export default Coding;
