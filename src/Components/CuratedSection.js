import React from 'react'
import "../Component-CSS/CuratedSection.css"

const CuratedSection = () => {
  return (
    <div className='curated'>
        <div className='userinfo'>
            <div className='userimage'>
                <img src='/images/profile/Frame 9983.webp' alt="useer_image"/>
            </div>
            <div className='userdetail'>
                <h4>Curated by</h4>
                <h3>Jithin</h3>
                <h4>Qoruz</h4>
            </div>
        </div>
        <p className='updateInfo'>Updated on Feb 25th 2024</p>
    </div>
  )
}

export default CuratedSection