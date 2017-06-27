import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ConsonantChart from './consonants/consonant_chart';
import VowelChart from './vowels/vowel_chart';

class Phonology extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      consonantInventory: [...props.conlangConsonants],
      vowelInventory: [...props.conlangVowels]
    };

    this.addConsonant = this.addConsonant.bind(this);
    this.addVowel = this.addVowel.bind(this);
  }

  componentWillMount () {
    this.props.requestChartableConsonants();
    this.props.requestChartableVowels();
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      consonantInventory: [...newProps.conlangConsonantIds],
      vowelInventory: [...newProps.conlangVowelIds]
    });
  }

  _parseInventory() {
    return {
      consonantInventory: this.state.consonantInventory.map(consonant => consonant.id),
      vowelInventory: this.state.vowelInventory.map(vowel => vowel.id)
    };
  }

  addConsonant (id) {
    this.setState({consonantInventory: this.state.consonantInventory.push(id)});
    let newPhonology = this._parseInventory();
    this.props.updatePhonology(
      this.props.currentUser.id,
      this.props.conlangId,
      this.props.phonologyId,
      newPhonology
    );
  }

  addVowel (id) {
    this.setState({consonantInventory: this.state.vowelInventory.push(id)});
    let newPhonology = this._parseInventory();
    this.props.updatePhonology(
      this.props.currentUser.id,
      this.props.conlangId,
      this.props.phonologyId,
      newPhonology
    );
  }

  render () {
    const ipa = this.props.ipa;

    if (!ipa) { return null; }
    return (
      <section className="phonology-section">
        <h2>
          Phonology
        </h2>
        <div className="consonants">
          <h3>Pulmonic Consonants</h3>
          <ConsonantChart
            allConsonants = {ipa.consonants}
            consonantInventory = {this.state.consonantInventory}
            addConsonant = {this.addConsonant}
            />
        </div>
        <div className="vowels">
          <h3>Vowels</h3>
        </div>
      </section>
    );
  }
}
