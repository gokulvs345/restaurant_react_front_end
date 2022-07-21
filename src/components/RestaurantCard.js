import React from 'react'
import {Card,Button} from 'react-bootstrap'
function RestaurantCard({item}) {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.neighborhood}
        </Card.Text>
    <Card.Text>
        <p> Cuisine:{item.cuisine_type}</p>
    </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default RestaurantCard