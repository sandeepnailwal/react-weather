var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState : function(){
    return {
      isLoading : false
    }
  },
  handleSearch: function(location){
    var that= this;
    debugger;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location : location,
        temp : temp,
        isLoading : false
      });
    },function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    })
  },
  render : function(){
    var {location,temp,isLoading} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center"> Fetching Weather .. </h3>;
      } else if (temp && location){
        return <WeatherMsg location={location} temp={temp}/>
      }
    }
    return (
      <div>
        <h1> Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;
