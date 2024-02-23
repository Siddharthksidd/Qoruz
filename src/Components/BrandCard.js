import React from 'react'
import Tag from './BrandCard/Tag'
import Info from './BrandCard/Info'
import "../Component-CSS/BrandCard.css"


const BrandCard = ({ id , title,  tag, about, empcount, empcountimg, location, year, agency}) => {
  
    return (
    <div className='BrandCard'>
        <div className='cardwrap'>
        <div className='brandlogo'>
            <img src="/images/logo/Frame 9878.webp" alt="BrandLogo" />
            <span className='badge'>
                <img src="/images/icons/check.webp" alt="badge" />
            </span>
        </div>
        <div className='branddetails'>
        <div className='barandtitle desktophide'>
        <div className='mobbrandlogo'>
            <img src="/images/logo/Frame 9878.webp" alt="BrandLogo" />
        </div>
            <div className='mobileemp'>
            <h3 className="desktophide">{title}</h3>
            <Info
            data = {empcount}
            />
            </div>
        </div>
            <h3 className="mobilehide">{title}</h3>
            <div className="tag">
            {tag.map((item, id) =>
            <Tag key={id} tagname = {item}/>)}
            </div>
            <p><span className="mobilehide">The Mavericks: </span>{about}</p>
            <div className='info'>
            <div className='infotag modileinfohide'>
                    <img src='/images/Info icons/apartment.webp' alt="infoicon" />
                    <p className='infodetail'>{empcount}</p>
            </div>
            {/* <div className='infotag'>
                <img src="/images/Info icons/factory.webp" alt="infoicon" />
                <h3>{empcount}</h3>
            </div> */}
            <Info
            icon = {'/images/Info icons/map-pin.webp'}
            data = {location}
            />
            <Info
            icon = {'/images/Info icons/year.webp'}
            data = {year}
            />
            <Info
            icon = {'/images/Info icons/factory.webp'}
            data = {agency}
            />
            </div>
        </div>
        </div>
        <div className='postbtn'>
            <button>
            Post Brief
            <img className="mobilehide" src="/images/icons/Website Icons black.webp" alt="link" />
            <img className="desktophide" src="/images/icons/Frame 1379.webp" alt="link" />
            </button>
        </div>
    </div>
  )
}

export default BrandCard