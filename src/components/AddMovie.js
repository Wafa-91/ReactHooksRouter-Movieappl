import React,{useState} from 'react'
import {Button,Modal,Form} from "react-bootstrap"

function AddMovie({addMovie}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   const [NewMovie, setNewMovie] = useState({});

let handlchange=(event)=>{setNewMovie({...NewMovie,[event.target.name]:event.target.value})}


    return (
        <div style={{textAlign:"center"}}>
    <Button variant="primary" onClick={handleShow}>
       Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title " name="name" onChange={handlchange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" name="image" onChange={handlchange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text"  name="description" onChange={handlchange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>PostUrl</Form.Label>
    <Form.Control type="text" name="url" onChange={handlchange}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" name="rating" onChange={handlchange} />
  </Form.Group>

 
 
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(NewMovie);handleClose()}}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
