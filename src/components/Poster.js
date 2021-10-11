import React from 'react'
import { BsFillSkipBackwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
function Poster(props) {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:50}}>
        
     <Link to="/"> <BsFillSkipBackwardFill/></Link>
     <h1>{props.location.state.Movie.name}</h1>
    
     <ReactPlayer url={props.location.state.Movie.url} width="700px" height="500px" playing="true"/>
        </div>
    )
}

export default Poster
