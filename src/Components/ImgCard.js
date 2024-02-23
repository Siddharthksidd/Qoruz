import React from 'react'
import "../Component-CSS/ImgCard.css"

const ImgCard = (props) => {
  return (
    <div className='Imgcard'>
        <div className='cardimg'>
            <img src={props.dispic} alt="location_Image" />
        </div>
        <div className='imgdetail'>
            <p>{props.detail}</p>
        </div>
        <button className='expbtn'>Explore
            <img src="/images/icons/Website Icons black.webp" alt="link" />
        </button>
    </div>
  )
}

export default ImgCard