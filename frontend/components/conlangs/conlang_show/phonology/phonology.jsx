import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ConsonantChart from './consonants/consonant_chart';
import VowelChart from './vowels/vowel_chart';

class Phonology extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      consonantInventory: [...props.conlangConsonantIds],
      vowelInventory: [...props.conlangVowelIds]
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

  addConsonant (id) {
    this.setState({consonantInventory: this.state.consonantInventory.push(id)});
    this.props.updatePhonology(
      this.props.currentUser.id,
      this.props.conlangId,
      this.props.phonologyId,
      { phonology: this.state }
    );
  }

  addVowel (id) {
    this.setState({consonantInventory: this.state.vowelInventory.push(id)});
    this.props.updatePhonology(
      this.props.currentUser.id,
      this.props.conlangId,
      this.props.phonologyId,
      { phonology: this.state }
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
