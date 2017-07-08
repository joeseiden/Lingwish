import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-js-pagination';
import ConlangIndexItem from './conlang_index_item';
import classNames from 'classnames';

class ConlangIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activePage: 1,
      perPage: 10
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.changePerPageCount = this.changePerPageCount.bind(this);
  }

  componentWillMount() {
    this.props.requestConlangIndex();
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  changePerPageCount(perPageCount) {
    this.handlePageChange(1);
    this.setState({perPage: perPageCount});
  }


  render() {
    const conlangs = this.props.conlangs;
    const totalItemCount = conlangs.length;
    let activePage = this.state.activePage;
    let perPage = this.state.perPage;
    if (!conlangs) { return null; }
    let startIdx = perPage * (activePage - 1);
    let endIdx = perPage * activePage;
    let currentPageConlangs = conlangs.slice(startIdx, endIdx);

    return (
      <section className="conlang-index">
        <h2>Conlangs</h2>
        <ul className="conlang-index">
          {currentPageConlangs.map((conlang, idx) => (
            <ConlangIndexItem
              key={`conlang-${idx}`}
              conlang={conlang}
              />
            )
          )}
        </ul>
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.perPage}
          totalItemsCount={totalItemCount}
          onChange={this.handlePageChange}
          />
        <div>Items Per Page</div>
        {[5,10,25,50,100].map((count, idx) => {
          let classes = classNames({
            'active': count===perPage
          });

          return (
            <button
              key={idx}
              disabled={count===perPage}
              className={classes}
              onClick={this.changePerPageCount.bind(this, count)}>
              {count}
            </button>
          );
        })}
      </section>
    );
  }
}

export default ConlangIndex;
