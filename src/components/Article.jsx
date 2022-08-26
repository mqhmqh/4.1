import React from 'react';
import Card from './Card';
import List from '../List';
import '../css/Card.css';

const CardList = () => {
  return (
    <div className='row'>
      {
        List.map((item, index) => index <= 2 ?
          <Card
            image={item.image}
            name={item.name}
            description={item.description}
            star={item.star}
            name1={item.author}></Card> : <div></div>
        )
      }
    </div>
  );
};
export default CardList;
