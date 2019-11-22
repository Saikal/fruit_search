import React from 'react';

class Fruit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={`${this.props.img}`} alt="boohoo" />
        <h2>weight { this.props.weight } pounds</h2>
      </div>
    ) 
  }
}

export default Fruit;