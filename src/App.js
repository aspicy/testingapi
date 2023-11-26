import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: ''
    }
  }

  clickHandler = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      const data = await response.json()
      // console.log(data);
      this.setState({ joke: data.value });
    } catch (error) {
      alert('Can\'t fetch Jokes right now', error);
    }
  }

  render()
  {
    return (
      <Button theJoke={this.state.joke} clickHandler={this.clickHandler} />
    );
  }
}

export default App;
