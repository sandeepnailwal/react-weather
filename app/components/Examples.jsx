var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render : function(){
    return (
      <div>
        <h2 className="text-center"> Examples  </h2>
        <p> Here are a few example locations to try out </p>
        <ol>
          <li>
            <Link to='/?location=Philadelphia'>Philadelphia</Link>
          </li>
          <li>
            <Link to='/?location=Delhi'>Delhi</Link>
          </li>
        </ol>
      </div>
    )
  }
})

module.exports = Examples;
