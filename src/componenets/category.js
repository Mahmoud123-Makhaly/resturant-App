import React from 'react'
import { Row  , Button} from 'react-bootstrap'

const Category = ({filterByCategory , allCategory}) => {
const onFilter = (cat)=>{
  filterByCategory(cat)
}

  return (
   
   <Row>
<div className='category-buttons d-flex justify-content-center'>
  {
    allCategory.length?(
      allCategory.map((item , index)=>{
        return(<Button id='focus' onClick = {()=>onFilter(item)}   className="btn mx-2">{item}</Button>
        )
      })
    ):(<h3>لاتوجد بيانات</h3>)
  }

</div>
   </Row>
  )
}

export default Category
