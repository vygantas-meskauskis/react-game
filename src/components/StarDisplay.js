import React, { useState } from 'react';

const StarDisplay = ({stars}) => {
    return (
      stars.map(starId => 
        <div key={starId} className="star" />
      )
    )
};

export default StarDisplay;