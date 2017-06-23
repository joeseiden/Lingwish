import React from 'react';

const LexiconIndexItem = props => {
  const word = props.word;
  const type = !word.type ? "Type not defined" : word.type;
  const definition = !word.definition ? "No definition" : word.definition;

  return (
    <li className="lexicon-index-item">
      <div className="word-info">
        <div className="word">{word.word}</div>
        <div className="word-type">{type}</div>
        <label>Definition:</label>
        <p className="word-definition">{definition}</p>
      </div>
    </li>
  );
};

export default LexiconIndexItem;
