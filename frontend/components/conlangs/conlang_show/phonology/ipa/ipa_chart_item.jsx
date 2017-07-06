import React from 'react';
import classNames from 'classnames';

const IpaChartItem = props => {
  const inventory = props.inventory.map(phoneme => phoneme.id);
  const phonemes = props.phonemes;

  return (
    <td>
      {phonemes.map(phoneme => {
          let classes = classNames({
            'ipa': true,
            'selected': inventory.includes(phoneme.id)
          });

          return (
            <span
              key={phoneme.id}
              value={phoneme.id}
              className={classes}
              title={phoneme.name}
              onClick={props.selectPhoneme.bind(this, phoneme.id)}>
              {phoneme.char}
            </span>
          );
      })}
    </td>
  );
};

export default IpaChartItem;
