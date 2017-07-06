import React from 'react';
import ConsonantChartRow from './consonant_chart_row';

const ConsonantChart = props => {
  const allConsonants = props.allConsonants;
  const consonantInventory = props.consonantInventory;
  const methods = [
    "Plosive",
    "Nasal",
    "Trill",
    "Tap",
    "Fricative",
    "Approximant",
    "Lateral-Approximant"
  ];
  const points = [
    "Bilabial",
    "Labiodental",
    "Dental",
    "Alveolar",
    "Postalveolar",
    "Retroflex",
    "Palatal",
    "Velar",
    "Uvular",
    "Pharyngeal",
    "Glottal"
  ];
  return (
    <table className="consonants-table">
      <thead>
        <tr>
          <th> </th>
          {points.map((point, idx) => <th key={`point-${idx}`}>{point}</th>)}
        </tr>
      </thead>
      <tbody>
        {methods.map((method, idx) => <ConsonantChartRow
                  key={`consonant-row-${idx}`}
                  rowName={method}
                  consonants={allConsonants[method]}
                  consonantInventory={consonantInventory.filter(consonant => consonant.method===method)}
                  toggleConsonant={props.toggleConsonant}
                  />
              )
            }
      </tbody>
    </table>
  );
};

export default ConsonantChart;
