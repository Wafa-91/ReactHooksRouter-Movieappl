import React from 'react'
import ReactStars from "react-rating-stars-component";

function Search({SearchByTitle,SearchByRating}) {
  
    return (
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px",backgroundColor:"RGBA(161,110,245,1)"}}>
        <h1>My favorite Movies</h1>
        <div  style={{marginTop:"10px",marginBottom:"10px" ,display:"flex",marginRight:"50px"}}>
            <input placeholder="search movie" style={{textAlign:"center"}} onChange={(e)=>{SearchByTitle(e.target.value)}} />
    <ReactStars
    count={5}
    onChange={(newRating)=>SearchByRating(newRating)}
    size={24}
    isHalf={true}
    
    activeColor="#ffd700"
  />

        </div>
        </div>
    )
}

export default Search
