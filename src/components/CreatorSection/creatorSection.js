import React from 'react'
import './creatorSection.css'
export default function CreatorSection() {
  return (
    <>
    <div className="creator">
    <div className="creatorTitle">
        <p className="creatorHead">
           Our creator
        </p>
        <p className="creatorMoto">
        The largest and unique Super rare NFT marketplace <br />
        For crypto-collectibles
        </p>
    </div>
    <div className="creatorItems">
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
        <img src="/nft-marketplace-content/creatorCard.svg" alt="" className='creatorCaard'/>
    </div>
    <button id='btnExploreMore'>Explore more</button>
  </div>
    
    </>
  )
}
