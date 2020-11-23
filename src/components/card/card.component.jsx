import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt="moster" />
        <h2> {props.monster.name} </h2>
        <h3> {props.monster.email} </h3>
    </div>
);