var React = require('react');

var WeatherForm = React.createClass({
  // getInitialState : function(){
  //   return {
  //     'WeatherMsg' : 'Type the city name'
  //   }
  // },
  onFormSubmit : function(e){
    e.preventDefault();

    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }
  },
  render : function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location"/>
        <button> Submit </button>
      </form>
    )
  }
})
//f1be6c9e11839d3749ad1f286d03dd08
module.exports = WeatherForm;
