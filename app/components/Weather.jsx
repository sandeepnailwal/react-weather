var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal')
var Weather = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false,
      errorMessage : false
    }
  },
  handleSearch: function(location){
    var that= this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp : temp,
        isLoading : false
      });
    },function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })
  },
  render : function(){
    var {location,temp,isLoading,errorMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Fetching Weather .. </h3>;
      } else if (temp && location){
        return <WeatherMsg location={location} temp={temp}/>
      }
    }

    function renderError(){
      if(typeof erroMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1> Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather;
