import React from 'react';
import classNames from 'classnames';

const ConsonantChartItem = props => {
  const inventory = props.inventory.map(consonant => consonant.id);
  const consonants = props.consonants;

  return (
    <td>
      {consonants.map(consonant => {
        let classes = classNames({
          'ipa': true,
          'voiced': consonant.voiced,
          'voiceless': !consonant.voiced,
          'selected': inventory.includes(consonant.id)
        });

        return (
          <span
            key={consonant.id}
            value={consonant.id}
            className={classes}
            title={consonant.name}
            onClick={props.toggleConsonant.bind(this, consonant.id)}>
            {consonant.char}
          </span>
        );
      })}
    </td>
  );
};

export default ConsonantChartItem;
