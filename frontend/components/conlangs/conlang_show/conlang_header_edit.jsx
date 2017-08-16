import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ConlangHeaderEdit = props => {
  const conlang = props.conlang;
  const description = conlang.description;
  return (
    <div className="conlang-show-header">
      <form onSubmit={props.handleSubmit}>
        <h2 className="conlang-title">
          <input type="text"
            value={conlang.name}
            onChange={props.update('name')}
            placeholder="Conlang Name"></input></h2>
        <span>Created by <Link to="/"><name>{conlang.author.username}</name></Link></span>
        <br/>
        <br/>
        <textarea className="conlang-description"
          value={conlang.description}
          placeholder="Conlang Description"
          wrap="hard"
          onChange={props.update('description')}>
        </textarea>
        <input type="submit"
          value="Save Changes"/>
      </form>
    </div>
  );
};

export default ConlangHeaderEdit;
