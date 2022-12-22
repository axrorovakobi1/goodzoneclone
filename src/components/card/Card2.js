import React from 'react'
import "./Card2.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card2({img,}) {
    return (
      <Card style={{ width: '14rem',height:'400px',background:'red' }}>
        <Card.Img style={{width:'180px' ,height:'175px',}} variant="top" src="https://cdn.goodzone.uz/goodzone/96d13d77-a2ca-420f-83fc-e4df2b5382e8" />
        <Card.Body>
          <Card.Title>hello</Card.Title>
          <Card.Text>
            Some quick 
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default Card2;