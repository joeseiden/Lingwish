import React from 'react';
import ReactDOM from 'react-dom';
import LexiconIndexItem from './lexicon_index_item';
import Pagination from 'react-js-pagination';
import classNames from 'classnames';

class LexiconIndex extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activePage: 1,
      perPage: 10
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.changePerPageCount = this.changePerPageCount.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  changePerPageCount(perPageCount) {
    this.handlePageChange(1);
    this.setState({perPage: perPageCount});
  }

  render() {
    let words = this.props.words;
    const conlangId = this.props.conlangId;
    const authorId = this.props.authorId;

    return (
      <section className="lexicon">
        <h2>Lexicon</h2>
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
          <Pagination
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.perPage}
            totalItemsCount={words.length}
            onChange={this.handlePageChange}
            />
          <div>Words Per Page</div>
          {[5,10,25,50,100].map((count, idx) => {
            let classes = classNames({
              'active': count===this.state.perPage
            });

            return (
              <button
                key={idx}
                disabled={count===this.state.perPage}
                className={classes}
                onClick={this.changePerPageCount.bind(this, count)}>
                {count}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
}

export default LexiconIndex;
