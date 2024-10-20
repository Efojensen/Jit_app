import './App.css';
import CircleAvatarProfile from './components/circleAvatarProfile';
import EmailBox from './components/emailBox';
import React from 'react';

function App() {
  return (
    <div className="App">
      <span className='header'>
        <CircleAvatarProfile />
        <h6>Meet our founder</h6>
      </span>
      <div className='largeBox'>
        <div className='smallerBox'>
          <button className='button'>Coming soon</button>
          <h2>Work when you want,</h2>
          <h2>Hire when you need</h2>
          <div>Work when you want, Hire when you need</div>
          <EmailBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
