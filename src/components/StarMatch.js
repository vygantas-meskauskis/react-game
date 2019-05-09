import React, { useState } from 'react';
import '../styles/StarMatch.css';
import {range, random} from '../utils/math.js';
import StarDisplay from './StarDisplay';

const PlayNumber = props => (
  <button className="number" onClick={() => console.log("num: " + props.number)}>
    {props.number}
  </button>
);


const StarMatch = () => {
    const [stars, setStars] = useState(random(1,9));

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarDisplay count={stars} />
          </div>
          <div className="right">
            {
                range(1,9).map(number => 
                    <PlayNumber key={number} number={number}/>
                    )
            }
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  export default StarMatch;