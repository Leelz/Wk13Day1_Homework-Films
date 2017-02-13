var React = require('react');

var Film = React.createClass({

//Inside CommentList
propTypes: {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
},

  render: function() {
    return (
        <div className="film">
          <h4>{ this.props.title }</h4>
          { this.props.children }
        </div>
      );
  }


});

module.exports = Film;