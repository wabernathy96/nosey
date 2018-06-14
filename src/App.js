import React, { Component } from 'react';
import Nav from './components/Header';
import Nose from './components/Nose';
import Wrapper from './components/Wrapper';
import Foot from './components/Footer'
import cards from './cards.json';
import './App.css';


class App extends Component {
  state = {
    cards,
    highscore: 0,
    idsClicked: []
  };


  shuffleCards = () => {
    const cards = this.state.cards;
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    //this.setState({ cards: cards });
    this.setState({ cards });
  };

  handleClickCount = (id) => {
    /*
      1. Make sure you (verbally) understand the problem
      2. Verbally come up with a solution, THEN pseudocode (if you want to)
      3. Code
    */
    const idsClicked = this.state.idsClicked;
    // 1. check if id is in idsClicked
    if(idsClicked.includes(id)) {
      // 2. if it is, save the high score (if new high score is greater than old) & empty idsClicked
      if (this.state.highscore < idsClicked.length) {
        this.setState({ highscore : idsClicked.length});
      }

      this.setState({ idsClicked : [] });
    } else {
      // 3. if it isn't, add id to idsClicked
      idsClicked.push(id);

      this.setState({ idsClicked });

    }
    // 4. shuffle cards
    this.shuffleCards();
  };

  render () {
    return (
      <div>
        <Nav
          score={this.state.idsClicked.length}
          highscore={this.state.highscore}
        >
        </Nav>
        <Wrapper>
        {this.state.cards.map((card) =>
          <Nose
            clickCount={this.handleClickCount}
            id={card.id}
            key={card.id}
            image={card.img}
          />
        )}
        </Wrapper>
        
        <Foot>
        </Foot>
      </div>
    )
  }
}

export default App;
