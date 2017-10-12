var React = require('react');

//var WeatherMsg = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'WeatherMsg' : 'Type the city name'
  //   }
  // },
  // handleSubmit : function(weatherMsg){
  //   this.setState({
  //     WeatherMsg : weathermsg
  //   })
  // },

var WeatherMsg = (props) => {
  return (
    <h3> Weather in {props.location} is {props.temp} </h3>
  )

}
module.exports = WeatherMsg;
