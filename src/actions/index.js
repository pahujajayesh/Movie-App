//action types
export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const ADD_MOVIES='ADD_MOVIES';

//action creators
export function addMovies(movies){
    return{
    type:ADD_MOVIES,
    movies
    }
}

export function addFavourites(movie){
    return{
        type:ADD_TO_FAVOURITES,
        movie
    }
}
export function removeFromFavourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie
    }
}