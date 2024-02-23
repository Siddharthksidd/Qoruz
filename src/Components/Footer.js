import React from 'react'
import { footMenu } from '../data/footerData';
import "../Component-CSS/Footer.css"
import Accordian from './Accordian';



const Footer = () => {

  return (
    <footer className='footer'>

        <div className='footertop'>
        <div className='qoruzdetail'>
        <img src='/images/logo/Logo - whitetxt.webp' alt="logo" />
        <p> Qoruz is an influencer marketing and intelligence platform, that enables superior influencer discovery, quick and easy influencer outreach.</p>
        <div className='sociallink'>
        <img src='/images/Socialicon/fb.webp' alt="facebook" />
        <img src='/images/Socialicon/instagram.webp' alt="instagram" />
        <img src='/images/Socialicon/twitter.webp' alt="twitter" />
        <img src='/images/Socialicon/linkedIN.webp' alt="linkedIN" />
        </div>
        </div>

        <div className='fmenu'>
        {
            footMenu.map(item => {
                const { id, title, menu } = item;
                return (
                    <div className="foot_menu" key={id}>
                        <h4>{title}</h4>
                        <ul>
                            {
                                menu.map(item => {
                                    const { id, link } = item;
                                    return (
                                        <li key={id}>
                                            {link}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                );
            })
        }
        </div>
        <div className='foot_menu_mob'>
        {
        footMenu.map(item => {
        const { id, title, menu } = item;
        return(
        <Accordian key={id} title={title} menu={menu}/>)})}
        </div>
        </div>
        <div className="foot_copyright desktopview">
            <p>
            2023 Qoruz, inc. All rights reserved.
            </p>
        </div>
        <div className="foot_copyrightM mobview">
            <p>
            Datrux Systems Pvt. Ltd. © 2022
            </p>
            <div className='sociallinkM'>
            <img src='/images/Socialicon/fb.webp' alt="facebook" />
            <img src='/images/Socialicon/twitter.webp' alt="twitter" />
            <img src='/images/Socialicon/linkedIN.webp' alt="linkedIN" />
            </div>
        </div>
    </footer>
  )
}

export default Footer