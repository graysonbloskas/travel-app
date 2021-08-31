import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Budapest from '../assets/images/budapest-QXMPBHV.jpg';
import Cruise from '../assets/images/cruise-ship-PJVXE72.jpg';
import Norway from '../assets/images/northern-lights.jpg'
import Bahamas from '../assets/images/bahamas.jpg'
import Paris from '../assets/images/eiffel-tower.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out These Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Budapest}
              text='Explore the Most Beautiful City in the Eastern World'
              label='Explore Budapest'
              path='/locations'
            />

            <CardItem
              src={Cruise}
              text='See What all an Alaskan Cruise has to Offer'
              label='Cruising Alaska'
              path='/locations'
            />

          </ul>

          <ul className='cards__items'>
            <CardItem
              src={Bahamas}
              text='Rest Your Feet in the sand at this Luxurious Island Destination'
              label='Tropical Bahamas'
              path='/locations'
            />

            <CardItem
              src={Paris}
              text='Explore the Pride of Western Civilization'
              label='Bon Voyage'
              path='/locations'
            />

            <CardItem
              src={Norway}
              text='Experience the Northern Lights from the Beautiful Country of Norway'
              label='Northern Lights - Norway'
              path='/locations'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
