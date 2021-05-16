import React from 'react';
import '../App.css';
import '../css/Welcomepage.css';
import 'w3-css/w3.css';

import AuthHomeButton from '../components/AuthHomeButton.js';

function WelcomePage(props) {
  return (
    <div>
        <AuthHomeButton></AuthHomeButton>
    </div>
    
  );
}

export default WelcomePage;