import React from 'react';
import classNames from 'classnames';

const VowelChartItem = props => {
  const inventory = props.inventory.map(vowel => vowel.id);
  const vowels = props.vowels;

  return (
    <td>
      {vowels.map((vowel, idx) => {
        let classes = classNames({
          'ipa': true,
          'rounded': vowel.rounded,
          'unrounded': !vowel.rounded,
          'selected': inventory.includes(vowel.id)
        });

        return (
          <span
            key={vowel.id}
            value={vowel.id}
            className={classes}
            title={vowel.name}
            onClick={props.toggleVowel.bind(this, vowel.id)}>
            {vowel.char}
          </span>
        );
      })}
    </td>
  );
};

export default VowelChartItem;
