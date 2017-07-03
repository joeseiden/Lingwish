import React from 'react';
import ConsonantChartItem from './consonant_chart_item';

const ConsonantChartRow = props => {
  const inventory = props.consonantInventory;
  const consonants = props.consonants;
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
    <tr>
      <th>{props.rowName}</th>
      {points.map(point => <ConsonantChartItem
                              key={`${props.rowName}-${point}`}
                              inventory={inventory.filter(consonant => consonant.point === point)}
                              consonants={consonants[point]}
                              toggleConsonant={props.toggleConsonant}
                              />
                          )
                        }
    </tr>
  );

};

export default ConsonantChartRow;
