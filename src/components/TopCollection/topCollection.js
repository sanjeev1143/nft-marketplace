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
        <img src="/nft-marketplace-content/card.png" alt="item1" className='item3 item0'/>
        <img src="/nft-marketplace-content/card.png" alt="item2" className='item4 item0'/>
        <img src="/nft-marketplace-content/card.png" alt="item3" className='item5 item0'/>
    </div>
    <button id='btnExploreMore'>Explore more</button>
  </div>

  </>
  )
}
