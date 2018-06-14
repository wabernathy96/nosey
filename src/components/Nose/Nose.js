import React from 'react';
import {Card} from 'react-materialize';

const Nose = (props) => (
  <Card
    className='card'
    onClick = {
      () => props.clickCount(props.id)
    }
  >
    <img src={props.image} height="200" />
  </Card>
);

export default Nose;