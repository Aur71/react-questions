import React from 'react';
import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const Question = ({ item }) => {
  const [showText, setShowText] = useState(false);
  const { question, answer } = item;

  return (
    <article>
      <header>
        <h2>{question}</h2>
        {showText ? (
          <AiFillMinusCircle
            className="icon"
            onClick={() => setShowText(!showText)}
          />
        ) : (
          <AiFillPlusCircle
            className="icon"
            onClick={() => setShowText(!showText)}
          />
        )}
      </header>
      {showText ? <p>{answer}</p> : null}
    </article>
  );
};

export default Question;
