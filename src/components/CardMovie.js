import React from 'react'
import {Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {Link}from 'react-router-dom'
function CardMovie({Movie}) {
    return (
        <div>
 <Card style={{ width: '16rem',marginTop:"10px"}}>
  <Card.Img variant="top" src={Movie.image} />

  <Card.Body>
    <Card.Title>{Movie.name}</Card.Title>
    <Card.Text> {Movie.description}</Card.Text>
  
   <Link to={{ pathname:`/poster/${Movie.name}`,state:{Movie}}}>Watch More</Link>

    <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={Movie.rating}
    isHalf={true}
  />
  </Card.Body>

</Card>
        </div>
    )
}

export default CardMovie
