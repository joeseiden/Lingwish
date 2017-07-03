import React from 'react';
import VowelChartItem from './vowel_chart_item';

const VowelChartRow = props => {
  const inventory = props.vowelInventory;
  const vowels = props.vowels;
  const frontness = [
    "Front",
    "Near-Front",
    "Central",
    "Near-Back",
    "Back"
  ];

  console.log(vowels);

  return (
    <tr>
      <th>{props.rowName}</th>
      {frontness.map(column => <VowelChartItem
                                  key={`${props.rowName}-${column}`}
                                  inventory={inventory.filter(vowel => vowel.frontness===column)}
                                  vowels={vowels[column]}
                                  toggleVowel={props.toggleVowel}
                                />
                            )
                          }
    </tr>
  );
};

export default VowelChartRow;
