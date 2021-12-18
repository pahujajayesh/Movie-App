import React from 'react';
import { storeContext } from '..';

import{addMovieToList ,handelMovieSearch} from '../actions'
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }
    handelAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        })
    }
    handelChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    handleSearch=()=>{
        const{searchText}=this.state;
        this.props.dispatch(handelMovieSearch(searchText));
    }
    render() {
        const {result,showSearchResults}=this.props.search;
        return(
            <div>
                <div className="nav">
                    <div className="search-container">
                        <input onChange={this.handelChange}/>
                        <button id="search-btn" onClick={this.handleSearch}>Search</button>
                        {showSearchResults &&
                            <div className="search-results">
                                <div className="search-result">
                                    <img src={result.Poster} alt="search-pic" />
                                    <div className="movie-info">
                                        <span>{result.Title}</span>
                                        <button onClick={()=> this.handelAddToMovies(result)}>
                                            Add To Movies
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }       
                    </div>
                </div>
            </div>
        );
    }

}
class NavbarWrapper extends React.Component{
    render(){
        return(
            <storeContext.Consumer>
                {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
            </storeContext.Consumer>
        )
    }
}
export default NavbarWrapper;