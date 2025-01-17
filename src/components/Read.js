import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios"; // Axios is used here to fetch data in react applications through asynchronously HTTP requests
{/* ReadFunction*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }

{/* Variable to store JSON data for movies */ }
const Read = () => {

    const [movies, setMovies] = useState([]); //useState allows to add state variables to functional components.

    //Defines and manages the Reload function, which fetches updated movie data from the server and updates the state.
    const Reload = () => {
        axios.get('http://localhost:4000/api/movies') // Grabbing the jsondata using axios
        .then((response) => {
            console.log(response.data);
            setMovies(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Asynchronously accessing the movie data the main website doesn't freeze
    useEffect(() => { // useEffect is used here to connect the read.js component to an external system
        Reload();
    }, []);

    return (
        <div>
            <h3>My Read in another component</h3>
            {/*Creating a myMovies variable to store the data of each movie so it can be used in Movieitem*/}
            <Movies myMovies={movies} ReloadData={Reload} />
        </div>
    )
};

export default Read;