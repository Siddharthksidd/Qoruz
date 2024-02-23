import React from 'react'
import "../../Component-CSS/Tag.css"

const Tag = (pros) => {
  return (
    <div className='brandtag'>
    <h4>{pros.tagname}</h4>
    </div>
  )
}

export default Tag