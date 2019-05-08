import React, { useState } from 'react';
import '../styles/StarMatch.css';
import {range} from '../utils/math.js';

const StarMatch = () => {
    const [stars, setStars] = useState(range(0,5));

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {stars.map(star => 
                <div key={star} className="star" />
            )}
            <div className="star" />
          </div>
          <div className="right">
            {
                range(1,9).map(number => 
                    <button key={number} className="number">{number}</button>)
            }
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  export default StarMatch;