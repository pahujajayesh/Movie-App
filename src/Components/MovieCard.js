import React from "react";
import { addFavourites } from "../actions";
class MovieCard extends React.Component {
  handelFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourites(movie));
  }
  handelUnFavouriteClick=()=>{}
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handelUnFavouriteClick}
              >
                UnFavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handelFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
