import React from 'react';
import IpaChartRow from './ipa_chart_row';
import classNames from 'classnames';


const IpaChart = props => {
  const allPhonemes = props.phonemes;
  const inventory = props.inventory;
  const rows = props.rows;
  const columns = props.columns;
  const type = props.type;

  const _filterInventoryByRow = (inv, row) => {
    if (type==="consonants") {
      return inv.filter(phoneme => phoneme.method === row);
    } else if (type==="vowels"){
      return inv.filter(phoneme => phoneme.openness === row);
    }
  };

  return (
    <table className={`${type}-table`}>
      <thead>
        <tr>
          <th> </th>
          {
            columns.map((column, idx) => (
              <th key={`${column}-${idx}`}
                className={`ipa-chart-header ${column}`}>
                {column}
              </th>
              )
            )
          }
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => <IpaChartRow
                key={`${type}-row-${idx}`}
                type={type}
                columns={columns}
                rowName={row}
                phonemes={allPhonemes[row]}
                inventory={_filterInventoryByRow(inventory, row)}
                selectPhoneme={props.selectPhoneme}
                />
              )
            }
      </tbody>
    </table>
  );
};

export default IpaChart;
