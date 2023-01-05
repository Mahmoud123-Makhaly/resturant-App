import React, { useState } from 'react'
import { Container, Navbar , Form , Button , Row } from 'react-bootstrap'

const Navs = ({filterBySearch}) => {
  const [text , setText] =useState("");
const onSearch = ()=>{
  filterBySearch(text)
}
  return (
    <Row>
         <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
<p className='brand-color'>مطعم جديد</p>        
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex me-auto my-2 my-lg-0">
            <Form.Control
              type="search"
              placeholder="ابحث"
              className="me-2"
              aria-label="Search"
             value={text}
             onChange={(e)=>{setText(e.target.value)}}
       
            />
            <Button onClick={()=>{onSearch()}}  className='btn-style'>ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Navs
