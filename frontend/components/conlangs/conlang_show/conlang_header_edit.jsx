import React from 'react';
import classNames from 'classnames';

const ConlangHeaderShow = props => {
  const conlang = props.conlang;
  const description = conlang.description ? conlang.description : "No description";

  return (
    <div className="conlang-show-header">
      <h2 className="conlang-title">{conlang.name}</h2>
      <span>Created by <Link to="/"><name>{conlang.author.username}</name></Link></span>
      <br/>
      <br/>
      <p className="conlang-description">{description}</p>
    </div>
  );
};

export default ConlangHeaderEdit;
