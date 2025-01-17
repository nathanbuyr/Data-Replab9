import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

{/* MovieItem Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
{/* Props are read only,clear and reusable*/ }
const MovieItem = (props)=>
{
    //useEffect function is used to log props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("Movie Item:", props.Mymovies);
      }, [props.mymovie]); // Only run this effect when the Mymovies prop changes

      const handleDelete = (e)=>{
        e.preventDefault();

        axios.delete('http://localhost:4000/api/movie/'+props.myMovies._id)
        .then((res)=>{
            props.Reload();
        })
        .catch();
      }
    
    return(
        <div>
            {/*Creating the card structure for each movie*/}
            <Card>
             {/*Header for the title*/}
            <Card.Header>{props.myMovies.title}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <img src={props.myMovies.poster}></img>
            {/*Footer adds extra info at the bottom of card*/}
            <footer>{props.myMovies.year}</footer>
            </blockquote>
            </Card.Body>
            {/*This code snippet adds an "Edit" button to each movie item, allowing users to navigate to the edit page for that specific movie. */}
            <Link to={"/edit/" + props.myMovies._id} className="btn btn-primary">Edit</Link>
            {/* Adds a delete button to each movie, sending a DELETE request with the movie's ID to the server. */}
            <Button variant="danger" onClick={handleDelete}>Delete</Button> 
            </Card>
        </div>
    );
}



export default MovieItem;