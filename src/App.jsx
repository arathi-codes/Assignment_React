import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard'
import Watchlist from './components/Watchlist'

export default function App() {


const [watchlist,setWatchlist] = useState([])
const [movies,setMovies]= useState([])
const [loading,setLoading] = useState(true)
const [error,setError] = useState("")
const [selectedGenre, setSelectedGenre] = useState("All")



const filteredMovies = movies.filter((movie) => 
    selectedGenre === "All" || movie.genre === selectedGenre)


function checkWatchlist (movie) {
    
  const alreadyAdded = watchlist.some((item) => item.title === movie.title)
  if (alreadyAdded) {
    return
  }

  setWatchlist([...watchlist,movie])
}

function removeMovie(title) {
    setWatchlist(watchlist.filter((item) => item.title !== title))
}

useEffect(()=>{
  async function fetchMovies() {

    try {
      const response = await axios.get("/movies.json")
      setMovies(response.data)
  } catch (error) {
      setError(error.message)
  } finally {
    setLoading(false)
  }
    }
    fetchMovies()
  },[]) 

  

  return (
    <div style={{backgroundColor: "#181818", color: "white", minHeight: "100vh", padding: "25px"}}>

    <h1 style={{textAlign:"center", fontSize: "32px", marginBottom: "30px", color:"#8f2727"}}>
      My Movie Watchlist</h1>

  <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"12px", marginBottom:"35px"}}>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}  
    onClick={() => setSelectedGenre("All")}>All</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
    onClick={() => setSelectedGenre("Sports")}>Sports</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
    onClick={() => setSelectedGenre("Romance")}>Romance</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
    onClick={() => setSelectedGenre("Fantasy")}>Fantasy</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
    onClick={() => setSelectedGenre("Feel good")}>Feel good</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
  onClick={() => setSelectedGenre("Thriller")}>Thriller</button>

  <button style={{
    backgroundColor: "#3A3A3A",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer"}}
    onClick={() => setSelectedGenre("Fantasy Anime")}>Fantasy Anime</button>
  </div>

    {loading && <h2>Loading...</h2>}
    {error && <h2>{error}</h2>}

    <div style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px"}}> 

      {!loading && filteredMovies.length === 0 && <h2>No movies found</h2>}
      {filteredMovies.map((movie)=>(
        <MovieCard key={movie.title}
        title={movie.title}
        genre={movie.genre}
        year={movie.year}
        rating={movie.rating}
        isAdded={watchlist.some((item) => item.title === movie.title)}
        onAdd={() => checkWatchlist(movie)} />
      ))}
</div>

<Watchlist watchlist={watchlist} onRemove={removeMovie} />
    </div>
  )
}