import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-js-pagination';
import DropdownMenu from 'react-dd-menu';
import ConlangIndexItem from './conlang_index_item';
import classNames from 'classnames';

class ConlangIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activePage: 1,
      perPage: 10,
      isMenuOpen: false
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.changePerPageCount = this.changePerPageCount.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillMount() {
    this.props.requestConlangIndex();
  }

  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  closeMenu() {
    this.setState({isMenuOpen: false});
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
      <section className="conlang-index-section">
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
        <div className="index-settings">
          <Pagination
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.perPage}
            totalItemsCount={totalItemCount}
            onChange={this.handlePageChange}
            />
          <DropdownMenu
            isOpen={this.state.isMenuOpen}
            close={this.closeMenu}
            toggle={<button
              type="button"
              onClick={this.toggleMenu}>
              Items Per Page
            </button>}
            align='right'>
            {[5,10,25,50,100].map((count, idx) => {
              let classes = classNames({
                'active': count===perPage
              });

              return (
                <li><button
                  key={idx}
                  disabled={count===perPage}
                  className={classes}
                  onClick={this.changePerPageCount.bind(this, count)}>
                  {count}
                </button></li>
              );
            })}
            </DropdownMenu>
          </div>
      </section>
    );
  }
}

export default ConlangIndex;
