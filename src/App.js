import React from 'react';
import Question from './Question';
import data from './data';

const App = () => {
  const questions = data;

  return (
    <main>
      <div className="container">
        <h1>Questions & Answers</h1>
        <div className="questions">
          {questions.map((item) => {
            return <Question key={item.id} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
