var React = require('react');
var FilmList = require('./FilmList');

var films = [
  {id: 1, title: 'Sausage Party', text: 'Showtimes'},
  {id: 2, title: 'Cafe Society', text: 'Showtimes'},
  {id: 3, title: 'Moonlight', text: 'Showtimes'}
];

//Highest container

var FilmBox = React.createClass({

  getInitialState: function () {
    return {data: films};
  },
  
  render: function () {
    return (
        <div className = "film-box">
          <h1>UK Opening This Week</h1>
          <FilmList data={this.state.data } />
         
          <div className = "button-box">
            <button type="button" onClick={this.getShowtimes}>Get Showtimes >></button>
          </div>
        </div>
      );
  }
});

module.exports = FilmBox;