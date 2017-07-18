import React from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
  const boxes = props
    .cards
    .map((item, index) => <WeatherBox
      key={index}
      index={index}
      removeWeatherBox={props.removeWeatherBox}
      {...item}
      item={item}/>)
  return (
    <div className="equalHeightWrap flexWrap">
      {boxes}
    </div>
  );
};

export default WeatherListBox;