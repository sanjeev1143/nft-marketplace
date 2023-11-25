import React from 'react'
import './topCollection.css'
export default function TopCollection(){
  return (
  <>
  <div className="collection">
    <div className="collectionTitle">
        <p className="collectionHead">
           Top collection
        </p>
        <p className="collectionMoto">
        The largest and unique Super rare NFT marketplace <br />
        For crypto-collectibles
        </p>
    </div>
    <div className="collectionItems">
        <img src="/nft-marketplace-content/card.svg" alt="item4" className='item3 item0'/>
        <img src="/nft-marketplace-content/card.svg" alt="item5" className='item4 item0'/>
        <img src="/nft-marketplace-content/card.svg" alt="item6" className='item5 item0'/>
    </div>
    <button id='btnExploreMore'>Explore more</button>
  </div>

  </>
  )
}
