import React from 'react';
import './App.css';

import SearchFruit from './components/SearchFruit.js';
import FruitsList from './components/FruitsList.js';
import Fruit from './components/Fruit.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      name: null
    };
  }

  search (keyword) {
    fetch(`/${keyword}`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          fruits: results,
          name: keyword
        })
      })
      .catch(error => {
        this.setState({
          fruits: null
        });
        console.log("Error ", error)
      });
  }

  render() {
    return (
      <div id="fruits-container">
        <div className="app-present">

          <SearchFruit search={this.search.bind(this)}/>

          { (this.state.fruits !== null && this.state.fruits.length !== 0) ? 
              <h1>Search Result for { this.state.name.toUpperCase() } </h1> : null 
          }

          { this.state.fruits === null ? 
              <h1>No Fruits Found</h1> : 
              (Array.isArray(this.state.fruits) ? 
                <FruitsList fruits={this.state.fruits} name={this.state.name} /> : 
                <Fruit img={this.state.fruits["image"]} weight={this.state.fruits["weight"]} />
              ) 
          }
          
        </div>
      </div>
    );
  }
}

export default App;
