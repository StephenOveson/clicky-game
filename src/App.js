import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import Wrapper from './compenents/Wrapper/index'
import Card from './compenents/ClickCards/index'
import ClickCards from './cards.json'
import Navbar from './compenents/Navbar/index'
import Footer from './compenents/Footer/index'

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    clickedArray: [],
    ClickCards,
    game: "Don't click the same picture twice!"
  }

  handleScore = (id) => {
    let clickedArray = this.state.clickedArray;
    if (clickedArray.includes(id)) {
      this.setState({ clickedArray: [], score: 0, game: "Game OVER! Try harder! Click on any card to start a new game" })
    } else {
      clickedArray.push(id);
      this.setState({ score: this.state.score + 1, game: "" });
      if (clickedArray.length === 12) {
        this.setState({ score: 12, game: "You WON!", clickedArray: [] })
      }
    }
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
    const Shuffled = this.state.ClickCards.sort(() => Math.random() - 0.5)
    this.setState({ ClickCards: Shuffled })
  }

  render() {
    return (
      <>
        <Navbar game={this.state.game} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.ClickCards.map(card => <Card image={card.image} key={card.id} name={card.name} id={card.id} handleScore={this.handleScore} />)}
        </Wrapper>
        <Footer image={logo} />
      </>
    );
  }
}

export default App;
