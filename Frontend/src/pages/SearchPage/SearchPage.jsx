import React from 'react';
import './SearchPage.scss';

const SearchPage = () => {
  const handleGoToMap = () => {
    window.open('https://www.google.com/maps/place/Великобритания/@54.6680653,-2.7528033,18.79z/data=!4m6!3m5!1s0x25a3b1142c791a9:0xc4f8a0433288257a!8m2!3d55.378051!4d-3.435973!16zL20vMDdzc2M?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className={`search-page`}>
      <div className="header-container">

      </div>
      <div className="search-container">
        <button onClick={handleGoToMap} className="search-button">
          <span className="icon">🗺️</span>
          <span>Find us</span>
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
