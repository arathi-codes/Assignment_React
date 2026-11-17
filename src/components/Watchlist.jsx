import React from 'react'

export default function Watchlist({watchlist,onRemove}) {
  return (
    <div>
        {watchlist.map((item)=> (
            <div key={item.title}>
                <h3>{item.title}</h3>
                <p>Genre:{item.genre}</p>
                <p>Year:{item.year}</p>
                <p>Rating:{item.rating}</p>
                <button onClick={()=>onRemove(item.title)}>Remove</button>
            </div>
        ))}
    </div>
  )
}
