import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
  state = {
  	correctAnswers : 0,
  	numOfQuestions : 0,
  };

  handlerAnswer = (answer) => {
  	if(answer) {
     this.setState((currentState) => ({
     	correctAnswers: currentState.correctAnswers + 1
     }));
    }
     this.setState((currentState) => ({
       	numOfQuestions : currentState.numOfQuestions +1
     }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<Game handleAnswer={this.handlerAnswer}/>
		<Score correctAnswers={this.state.correctAnswers} numOfQuestions ={this.state.numOfQuestions} />
      </div>
    );
  }
}

export default App;
