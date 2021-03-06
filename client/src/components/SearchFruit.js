import React from 'react';

class SearchFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searching_fruit: ''
    }
  }

  onChange (e) {
    this.setState({
      searching_fruit: e.target.value
    })
  }

  search () {
    this.props.search(this.state.searching_fruit.toLowerCase());
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.searching_fruit} onChange={this.onChange.bind(this)} placeholder="Enter Fruit" />
        <button type="submit" onClick={this.search.bind(this)}>Search</button>
      </div>
    )
  }
}

export default SearchFruit;




