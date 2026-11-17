import React from 'react'

export default function MovieCard({title,genre,year,rating,onAdd,isAdded}) {
  return (
    <div>
      <div style={{border: '1px solid #333333',
      padding: '20px',
      margin: '0px',
      width: 'auto',
      borderRadius: '8px',
      backgroundColor: '#242424',
      color:'white'}}>

        <h2>{title}</h2>
        <p>Genre: {genre}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <button style={{
        backgroundColor:"#8f2727", 
        color:"white", 
        border:"none", 
        padding:"9px 14px", 
        borderRadius:"4px", 
        cursor:"pointer"}}
        onClick={onAdd} disabled={isAdded}>{isAdded ? "Added" : "Add to Watchlist"}</button>
      </div>
    </div>
  )
}