import React from 'react';
import IpaChartItem from './ipa_chart_item';

const IpaChartRow = props => {
  const type = props.type;
  const inventory = props.inventory;
  const phonemes = props.phonemes;
  const columns = props.columns;

  const filterInventoryByColumn = (inv, col) => {
    if (type==="consonants") {
      return inv.filter(phoneme => phoneme.point === col);
    } else if (type==="vowels"){
      return inv.filter(phoneme => phoneme.frontness === col);
    }
  };

  return (
    <tr>
      <th className={`ipa-chart-row ${props.rowName}`}>{props.rowName}</th>
      {columns.map(column => <IpaChartItem
                key={`${props.rowName}-${column}`}
                inventory={filterInventoryByColumn(inventory, column)}
                phonemes={phonemes[column]}
                selectPhoneme={props.selectPhoneme}
                cellName={`${column}-${props.rowName}`}
                />
            )
          }
    </tr>
  );
};

export default IpaChartRow;
