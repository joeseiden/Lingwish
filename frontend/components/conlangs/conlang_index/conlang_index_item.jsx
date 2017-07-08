import React from 'react';
import { Link } from 'react-router-dom';

const ConlangIndexItem = props => {
  const conlang = props.conlang;

  return (
    <li className="conlang-index-item">
      <div className="conlang-title">
        <Link to={`/conlangs/${conlang.id}`}>
          {conlang.name}
        </Link>
      </div>
      <p className="conlang-description abbreviated">
        {conlang.description}
      </p>
      <span>Created by&nbsp;
        <Link to="/">
          <name>
            {conlang.author.username}
          </name>
        </Link>
      </span>
    </li>
  );
};

export default ConlangIndexItem;
