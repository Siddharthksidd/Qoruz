import React from 'react'
import BrandCard from './BrandCard'
import {brandData} from '../data/BrandData';
import "../Component-CSS/BrandList.css"

const BrandList = () => {

  return (
    <div className='Brandcards'>
        {brandData.map(item =>
        <BrandCard 
        key={item.id}
        {...item}        
        />
        )}
    </div>
  )
}

export default BrandList