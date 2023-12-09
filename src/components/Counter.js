import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Counter() {
    const [count,setCount]=useState(0)

    const increase=()=>{
        setCount(count+1)
    }
   const decrease=()=>{
    setCount(count-1)
   }
  return (
    <div>
     <h1>Counter :{count}</h1>
     
     <Button className='btn btn-primary' onClick={increase}>Increase</Button>
    
     <Button className='btn btn-danger' onClick={decrease}>Decrease</Button>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1701921188934-34578d66d4e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Counter
