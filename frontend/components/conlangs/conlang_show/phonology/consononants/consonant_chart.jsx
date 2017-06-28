import React from 'react';
import ConsonantChartRow from './consonant_chart_row';

const ConsonantChart = props => {
  const allConsonants = props.consonants;
  const consonantInventory = props.consonantInventory;
  const methods = ["Plosive", "Nasal", "Trill", "Tap", "Fricative", "Approximant", "Lateral-Approximant"]

  return (
    <table className="consonants-table">
      <tr>
        <th>$nbsp;</th>
        {methods.map(method => <th>{method}</th>)}
        // <th>Bilabial</th>
        // <th>Labiodental</th>
        // <th>Dental</th>
        // <th>Alveolar</th>
        // <th>Postalveolar</th>
        // <th>Retroflex</th>
        // <th>Palatal</th>
        // <th>Velar</th>
        // <th>Uvular</th>
        // <th>Pharyngeal</th>
        // <th>Glottal</th>
      </tr>
      <ConsonantChartRow
          rowName="Plosive"
          consonants={allConsonants.Plosive}
          consonantInventory={consonantInventory.filter(consonant => consonant.method === "Plosive")}
          addConsonant={props.addConsonant}
        />
      <ConsonantChartRow
        rowName="Nasal"
        consonants={allConsonants.Nasal}
        consonantInventory={consonantInventory.filter(consonant => consonant.method === "Nasal")}
        addConsonant={props.addConsonant}
        />
      <ConsonantChartRow
        rowName="Trill"
        consonants={allConsonants.Trill}
        consonantInventory={consonantInventory.filter(consonant => consonant.method === "Trill")}
        addConsonant={props.addConsonant}
        />
      <ConsonantChartRow
        rowName="Tap"
        consonants={allConsonants.Tap}
        consonantInventory={consonantInventory.filter(consonant => consonant.method === "Tap")}
        addConsonant={props.addConsonant}
        />
      <ConsonantChartRow
        rowName="Fricative"
        consonants={allConsonants.Fricative}
        consonantInventory={consonantInventory.filter(consonant => consonant.method === "Fricative")}
        addConsonant={props.addConsonant}
        />
      <ConsonantChartRow
        rowName="Lateral Fricative"
        consonants={allConsonants.LateralFricative}
        consonantInventory={consonantInventory.filter(consonant => consonant.method === "Lateral-Fricative")}
        addConsonant={props.addConsonant}
        />
    </table>
  )
}

export default ConsonantChart;
