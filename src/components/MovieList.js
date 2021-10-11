import React from 'react'
import CardMovie from './CardMovie'

function MovieList({ListMovie,titleSearch,ratingSearch}) {


    return (
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"1000px",marginLeft:100}}>
          {ListMovie.filter(el=>el.name.toLowerCase().includes(titleSearch.toLowerCase())&& el.rating>=ratingSearch).map(el=><CardMovie Movie={el}/>)}
        </div>
    )
}

export default MovieList
