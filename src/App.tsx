import './App.css';
import EmailBox from './components/emailBox';
import AppStrings from './constants/appStrings';
import RoundedRectangle from './components/roundedRectangle';
import CircleAvatarProfile from './components/circleAvatarProfile';
// import React from 'react';

function App() {
  function capFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="App">
      <span className='header'>
        <CircleAvatarProfile />
        <h6>{AppStrings.meetFounder}</h6>
      </span>
      <div className='largeBox'>
        <div className='smallerBox'>
          <button className='button'>{AppStrings.comingSoon}</button>
          <h2>Work when you want,</h2>
          <h2>Hire when you need</h2>
          <div>{AppStrings.workWhenHireNeed}</div>
          <EmailBox/>
        </div>
      </div>
      <hr className='horizontalRule'></hr>
      <div className='ruleSets'>
        <h2>{AppStrings.howItWorks}</h2>
        <h4 className='smallText'>{AppStrings.companyDescription}</h4>
        <div className='roundedRectangleRow'>
          <RoundedRectangle width={630} height={473} borderRadiusSide='bottom-right'/>
          <RoundedRectangle width={432} height={473} borderRadiusSide='none'/>
        </div>
        <div className='detailsEmployers'>
          <div className='detailedEmployer'>
            <h6 className='smallText'>{AppStrings.whatWeOffer}</h6>
            <h5>{AppStrings.howItWorks + ' ' + AppStrings.forEmployers}</h5>
            <p>{AppStrings.detailsEmployerPt1}</p>
            <p>{AppStrings.detailsEmployerPt2}</p>
          </div>
          <div className='detailedEmployer'>
            <span>{capFirstLetter(AppStrings.forCandidates)}  {capFirstLetter(AppStrings.forEmployers)}</span>
            <hr className='horizontalRule'></hr>
            <RoundedRectangle width={613} height={473} borderRadiusSide='top-right'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
