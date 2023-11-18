import React from 'react'
import MainContainer from '../../Layout/MainContainer'
import { useSelector } from 'react-redux'
import { categorySelector } from '../../Store/Slices/CategorySlice'

const CategoryItems = () => {
  const category = useSelector(categorySelector)
  console.log(category);
  return (
    <MainContainer>
        category items
    </MainContainer>
  )
}

export default CategoryItems