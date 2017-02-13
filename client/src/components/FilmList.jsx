var React = require('react');
var Film = require('./Film.jsx')
var FilmList = React.createClass({

//Inside comment box

  render: function () {

    var filmNodes = this.props.data.map( function (film) {
      return (
        //the following are all nodes
        <Film title = { film.title } key={ film.id}>
          { film.text}
        </Film>
        );
    });

    return (
        <div className="film-list">
          { filmNodes }
        </div>
      );
  }

});

module.exports = FilmList;