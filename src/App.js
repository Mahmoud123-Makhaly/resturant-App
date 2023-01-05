import React, { useState } from 'react'
import { Container} from 'react-bootstrap'
import Navs from './componenets/Navs'
import Header from './componenets/Header'
import Category from './componenets/category'
import CardItems from './componenets/CardItems'
import { items } from './data'
const App = () => {
  const [itemData  , setItemData] = useState(items);
  //filter by category
const filterByCategory = (cat)=>{
  if(cat==="الكل"){
    setItemData(items)
  }
else{
  let newItems = items.filter((item)=>{return item.category===cat})
setItemData(newItems)
}
}
//filter category
const allCategory = ["الكل", ...new Set(items.map((item)=>{return item.category}))];
//filterBy search form

const filterBySearch = (word)=>{
const newArray = items.filter((item)=>{return item.title===word})
setItemData(newArray)
}
  return (
    <div className='font color-body'>
      <Navs filterBySearch={filterBySearch}/>
    <Container>
<Header/>
<Category filterByCategory={filterByCategory} allCategory={allCategory}/>
<CardItems itemData ={itemData}/>

    </Container>
    </div>
  )
}

export default App
 