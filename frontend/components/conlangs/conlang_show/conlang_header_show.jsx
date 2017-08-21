import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const ConlangHeaderShow = props => {
  const conlang = props.conlang;
  const description = conlang.description ? conlang.description : "No description";
  const editButton = props.conlangAuthor ? <button onClick={props.toggleEditing}>Edit</button> : null;

  return (
    <div className="conlang-show-header">
      <h2 className="conlang-title">{conlang.name}</h2>
      <span>Created by <Link to="/"><name>{conlang.author.username}</name></Link></span>
      <br/>
      <br/>
      <p className="conlang-description">{description}</p>
      {editButton}
    </div>
  );
};

export default ConlangHeaderShow;
