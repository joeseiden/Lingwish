import React from 'react';
import ReactDOM from 'react-dom';
import LexiconIndexItem from './lexicon_index_item';

class LexiconIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    let words = this.props.words;
    const conlangId = this.props.conlangId;
    const authorId = this.props.authorId;

    return (
      <section className="lexicon">
        <h3>Lexicon</h3>
        <div className="lexicon-index-container">
          <ul className="lexicon-index">
            {this.props.words.map((word, idx) => <LexiconIndexItem
              key={idx}
              word={word}
              conlangId={conlangId}
              authorId={authorId}
              />)
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default LexiconIndex;
