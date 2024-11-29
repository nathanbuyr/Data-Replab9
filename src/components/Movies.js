import MovieItem from "./Movieitem";
import Read from "./Read";
{/* Movies Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
const Movies = (props) => {
    {/* Using .map to create a new array to store each key for each respective movie*/ }
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovies={movie} key={movie._id} Reload={props.ReloadData} /*Passes the ReloadData function to child components so they can trigger a refresh after deletion. *//>
        }
    );
  }
  
  export default Movies;