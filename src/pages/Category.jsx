import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'

const Category = () => {
    const {id} = useParams()

  return (
    <div>
        <ItemListContainer
        id = {id}>
        </ItemListContainer>
    </div>
  )
}

export default Category