import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <><div className="footer">
					<div className="footerSection">

					<div className="siteDetails">
						<img src="/nft-marketplace-content/appLogo.svg" alt="logo" className="appLogof" />
						<p className="detailpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti mollitia, a obcaecati quas facilis natus libero molestias.</p>
						<div className="socialMedia">
						<a href=""> <img src="/nft-marketplace-content/facebook.svg" alt="logo" className="socialmediaLogo" /></a>
						<a href=""><img src="/nft-marketplace-content/linkedin.svg" alt="logo" className="socialmediaLogo" /></a>
						<a href=""><img src="/nft-marketplace-content/twitter.svg" alt="logo" className="socialmediaLogo" /></a>
						</div>
				
					</div>
					<div className="sitemap">
							<p className="contentSectionHead">Site Map</p>
							<a href='' id='' className='link'>Home</a>
							<a href='' id='' className='link'>About</a>
							<a href='' id='' className='link'>NFT</a>
							<a href='' id='' className='link'>Roadmap</a>
							<a href='' id='' className='link'>Blog</a>
							<a href='' id='' className='link'>Contact</a>

					</div>
					<div className="company"> 
					<p className="contentSectionHead">Company</p>
							<a href='' id='' className='link'>Help&Support</a>
							<a href='' id='' className='link'>Terms&Conditions</a>
							<a href='' id='' className='link'>Privacy Policy</a>

					</div>
					<div className="resource">
					<p className="contentSectionHead">Resource</p>
							<a href='' id='' className='link'>Partner</a>
							<a href='' id='' className='link'>Blog</a>
							<a href='#' id='' className='link'>Newsletter</a>

					</div>

					</div>	
					      
				<p className="copyright">Copyright © NFT core 2022 All right reserved</p>
		</div>

    </>
  )
}
