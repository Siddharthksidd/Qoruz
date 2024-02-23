import React from 'react'
import "../Component-CSS/AgencySection.css"


const Agencysection = () => {
  return (
    <div className='agencysec'>
        <div className='agencycard'>
            <div className='agencyleft'>
                <h3>Are you an agency?</h3>
                <p className='agencypara'>Join the Qoruz agency partnership programme!</p>
                <div className='agencybtns'>
                    <button className='regbtn'>Register Now
                        <img src="/images/icons/Frame 1379.webp" alt="link" />
                    </button>
                    <button className='whybtn'>Why Register?
                        <div className='tooltip'>
                                <p className='tipitempara'><img src="/images/icons/check (1).webp" alt="icon" />Become listed among industry top marketing agencies.</p>
                                <p className='tipitempara'><img src="/images/icons/check (1).webp" alt="icon" />Generate quality leads.</p>
                                <p className='tipitempara'><img src="/images/icons/check (1).webp" alt="icon" />Promote your digital agency.</p>
                                <div className='extender'></div>
                        </div>
                    </button>
                </div>
            </div>
            <div className='agencyright'>
                <img src="/images/background/agencyimg.webp" alt="agency_Image" />
            </div>
        </div>
        
    </div>
  )
}

export default Agencysection