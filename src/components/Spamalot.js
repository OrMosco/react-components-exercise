import Spam from "./Spam";
import React, { Component } from 'react';


function Spamalot() {
  const spamArray = [];

  for (let i = 0; i < 500; i++) {
    spamArray.push(<Spam key={i} />);
  }

  return  spamArray; 
}

export default Spamalot

