
import {APIKEY,BASEURL} from '../constants/constants'
export const ORIGINALS = `/discover/tv?api_key=${APIKEY}&with_networks=213`
// export const Tag = `/discover/movie?api_key=${APIKEY}&language=en-US`
export const Genres = `/genre/movie/list?api_key=${APIKEY}&language=en-US`
export const GenreID = `/discover/movie?api_key=${APIKEY}&with_genres=`
// export const SEARCH = `/search/movie?api_key=${APIKEY}&language=en-US&query=${searchName}&page=1&include_adult=false`
// "https://api.themoviedb.org/3/search/movie?api_key=4febf5a8cbe38fa1518dc7c3e44fce8e&language=en-US&query=wednesday&page=1&include_adult=false"