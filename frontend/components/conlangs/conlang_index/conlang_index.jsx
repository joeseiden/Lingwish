import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-js-pagination';
import ConlangIndexItem from './conlang_index_item';

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
    this.setState({perPage: perPageCount});
  }


  render() {
    const conlangs = this.props.conlangs;
    let activePage = this.state.activePage;
    let perPage = this.state.perPage;

    if (!conlangs) { return null; }

    let startIdx = (activePage - 1) + (perPage * activePage - 1) - 1;
    let endIdx = (activePage - 1) + (perPage * activePage) - 1;
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
          totalItemsCount={this.props.totalItemCount}
          onChange={this.handlePageChange}
          />
      </section>
    );
  }
}

export default ConlangIndex;
