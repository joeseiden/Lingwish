import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ConlangHeaderEdit = props => {
  const conlang = props.conlang;
  const name = conlang.name;
  const description = conlang.description;
  return (
    <div className="conlang-show-header">
      <form onSubmit={props.handleSubmit}>
        <h2 className="conlang-title">
          <input type="text"
            value={conlang.name}
            onChange={props.update('name')}
            placeholder="Conlang Name"></input></h2>
          <span>Created by <name>{conlang.author.username}</name></span>
        <br/>
        <br/>
        <textarea className="conlang-description"
          value={conlang.description}
          placeholder="Conlang Description"
          wrap="hard"
          onChange={props.update('description')}>
        </textarea>
        <input type="submit"
          value="Save Changes"
          className="submit"/>
      </form>
      <button className="cancel-button" onClick={props.toggleEditing}>Cancel</button>
    </div>
  );
};

export default ConlangHeaderEdit;
