import React from 'react'
import { Alert } from 'react-bootstrap'

const Notfound = ({messege , color}) => {
  return (
    <Alert  variant={color}>
   <h3> {messege} </h3>
  </Alert>
  )
}

export default Notfound
