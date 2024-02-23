import React from 'react'
import "../Component-CSS/Navigation.css"

const Navigation = () => {
  return (
    <>
    <div className='navigation'>
        <p className='despktopview'>Agency Partnership &gt; Public Relations Agencies &gt; <span>Top 100 Public Relations Agencies in India (2024)</span></p>
        <p className='mobileview'>Agen... &gt; Public... &gt;<span>Top 100 Public...</span></p>

    </div>

    <div className="heroparamob mobileview">
        <p>With a user base of around 100M, India stands next to the US in the Instagram users count. With the advent of the internet in India, there was a huge spike in the total social media users and also the Influencers. Among different Social media platforms, Instagram always remains a <span>read more...</span></p>
    </div>
    </>
  )
}

export default Navigation