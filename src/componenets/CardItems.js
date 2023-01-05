import React from 'react'
import { Row , Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Notfound from './Notfound'
const CardItems = ({itemData}) => {
  return (
<Row>
{
    
    itemData.length?(
        itemData.map((item , index)=>{
            return(
                <Col key={index} sm="12">
          <Card className="d-flex flex-row mb-2" style={{background:"#f8f8f8"}}> 
            <Card.Img  variant="top" src={item.src} style={{width:"150px",height:"150px"}}/>
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
              <p className='card-title'>{item.title}</p>  
               <p className='card-price'>{item.price}</p>
              </Card.Title>
              <Card.Text>
           <p className='card-desc'>{item.desc}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            )
        })
    ):(<Notfound messege="لاتوجد اصناف جديدة" color="danger" />)
}
</Row>
  )
}

export default CardItems
