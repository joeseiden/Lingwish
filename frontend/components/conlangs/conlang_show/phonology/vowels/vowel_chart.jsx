import React from 'react';
import VowelChartRow from './vowel_chart_row';

const VowelChart = props => {
  const allVowels = props.allVowels;
  const vowelInventory = props.vowelInventory;
  const openness = [
    "Close",
    "Near-Close",
    "Close-Mid",
    "Mid",
    "Open-Mid",
    "Near-Open",
    "Open"
  ];
  const frontness = [
    "Front",
    "Near-Front",
    "Central",
    "Near-Back",
    "Back"
  ];



  return (
    <table className="vowels-table">
      <thead>
        <tr>
          <th> </th>
          {frontness.map((column, idx) => <th id={`${column}-column`} key={`frontness-${idx}`}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {openness.map((row, idx) => <VowelChartRow
                    key={`vowel-row-${idx}`}
                    rowName={row}
                    vowels={allVowels[row]}
                    vowelInventory={vowelInventory.filter(vowel => vowel.openness===row)}
                    toggleVowel={props.toggleVowel}
                    />
                  )
                }
      </tbody>
    </table>
  );
};

export default VowelChart;
