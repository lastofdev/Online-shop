import React from 'react';
import '../App.css';
import Good from './Good';
import {Test} from './Test';

export function Maingood() {
  
  const arr = [
    {
      id: 1,
      name: 'VIP',
      price: '5000',

    },
    {
      id: 2,
      name: 'Gold',
      price: '5000', 
    },
    {
      id: 3,
      name: 'Delux',
      price: '6000'
    },
    {
      id: 4,
      name: 'что то',
      price: '7000'
    }

  ]
  
  return (
    <div >
        <Test />
        <div className="containerforgood">
                <div className="listofgood">
                {
                     arr.map(el => <Good key={el.id} name={el.name}
                    price={el.price} />)
                    }
                </div>
        </div>
    </div>
  
  );
}