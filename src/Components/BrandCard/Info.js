import React from 'react'
import "../../Component-CSS/Info.css"

const Info = (props) => {
  return (
    <div className='infotag'>
        <img src={props.icon} alt="infoicon" />
        <p className='infodetail'>{props.data}</p>
    </div>
  )
}

export default Info