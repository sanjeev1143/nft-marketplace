import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navBar">
        <div className="nav_cont1">
            <img src="/nft-marketplace-content/appLogo.png" alt="logo" className="appLogo" />
            <a href='' id='nav_head1'>Discover</a>
            <a href='' id='nav_head2'>Marketplace</a>
            <a href='' id='nav_head3'>How it works <span id='nav_head3_pro'>pro</span></a>
        </div>
        <div className="nav_cont2">
          
            <img src="/nft-marketplace-content/searchIcon.png" alt="" className="searchIcon" />
            <input type="text" id='search_bar' placeholder='connect wallet' className='search_bar'/>
            <img src="/nft-marketplace-content/upload.png" alt="" className="upload" />
        </div>
    </div>
  )
}
