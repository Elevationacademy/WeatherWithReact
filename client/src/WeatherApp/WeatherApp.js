import React from 'react';
import ReactDom from 'react-dom';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    
    //Declare local state
    this.state = {
      cards: []
    }

  }
  onSubmitSearchForm(string) {
    var stracture = {
      name: string.location.name,
      icon: string.current.condition.icon,
      feelslike_c: string.current.feelslike_c,
      text: string.current.condition.text,
      comments: []
    };
    //Were using a prevstate in a function so we can preserve the state once we are doing the update
    this.setState(prevState => ({
      cards: prevState
        .cards
        .concat(stracture)
    }));
  };

  removeWeatherBox(string) {
    //We copy the state to a new variable incase state changes
    const newState = this.state.cards;
    if (newState.indexOf(string) > -1) {
      newState.splice(newState.indexOf(string), 1);
      this.setState({cards: newState})
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          cards={this.state.cards}
          removeWeatherBox={this.removeWeatherBox}/>
      </div>
    );
  }
}

export default WeatherApp;