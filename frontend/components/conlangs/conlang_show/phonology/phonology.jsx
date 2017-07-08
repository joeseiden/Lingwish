import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ConsonantChart from './consonants/consonant_chart';
import VowelChart from './vowels/vowel_chart';
import IpaChart from './ipa/ipa_chart';

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

class Phonology extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      consonantInventory: props.conlangConsonants,
      vowelInventory: props.conlangVowels
    };

    this.toggleConsonant = this.toggleConsonant.bind(this);
    this.toggleVowel = this.toggleVowel.bind(this);
  }

  componentWillMount () {
    this.props.requestChartableConsonants();
    this.props.requestChartableVowels();
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      consonantInventory: newProps.conlangConsonants,
      vowelInventory: newProps.conlangVowels
    });
  }

  _parseInventory() {
    return {
      consonant_inventory: this.state.consonantInventory.map(consonant => consonant.id),
      vowel_inventory: this.state.vowelInventory.map(vowel => vowel.id)
    };
  }

  toggleConsonant (id) {
    let newPhonology = this._parseInventory();
    let idx = newPhonology.consonant_inventory.indexOf(id);
    if (idx > -1) {
      newPhonology.consonant_inventory.splice(idx, 1);
    } else {
      newPhonology.consonant_inventory.push(id);
    }
    this.updateInventories(newPhonology);
  }

  toggleVowel (id) {
    let newPhonology = this._parseInventory();
    let idx = newPhonology.vowel_inventory.indexOf(id);
    if (idx > -1) {
      newPhonology.vowel_inventory.splice(idx, 1);
    } else {
      newPhonology.vowel_inventory.push(id);
    }
    this.updateInventories(newPhonology);
  }

  updateInventories (newPhonology) {
    if (this.props.currentUser) {
      this.props.updatePhonology(
        this.props.currentUser.id,
        this.props.conlangId,
        this.props.phonologyId,
        newPhonology
      );
    }
  }

  render () {
    const ipa = this.props.ipa;
    const consonants = ipa.consonants;
    const vowels = ipa.vowels;

    if (!consonants || !vowels) { return null; }
    return (
      <section className="phonology-section">
        <h2>
          Phonology
        </h2>
        <div className="consonants">
          <h3>Pulmonic Consonants</h3>
          <IpaChart
            type="consonants"
            columns={points}
            rows={methods}
            phonemes={consonants}
            inventory={this.state.consonantInventory}
            selectPhoneme={this.toggleConsonant}
            />
        </div>
        <div className="vowels">
          <h3>Vowels</h3>
          <IpaChart
            type="vowels"
            columns={frontness}
            rows={openness}
            phonemes={vowels}
            inventory={this.state.vowelInventory}
            selectPhoneme={this.toggleVowel}
            />
        </div>
      </section>
    );
  }
}

export default Phonology;
