import React from 'react'
import ImgCard from './ImgCard'
import {ImgData} from '../data/ImgSecData'
import "../Component-CSS/ImgSection.css"

const ImgSection = () => {

  return (
    <div className='imgsec'>
        {ImgData.map(item=>(
        <ImgCard 
        key={item.id}
        detail={item.detail}
        dispic={item.disimg}
        />))}
    </div>
  )
}

export default ImgSection