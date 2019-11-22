import React from 'react';
import Fruit from './Fruit.js';

const FruitList = (props) => (
  <div>
    { props.fruits.map(item => <Fruit img={item["image"]} weight={item["weight"]} />)
    }
  </div>
)

export default FruitList;