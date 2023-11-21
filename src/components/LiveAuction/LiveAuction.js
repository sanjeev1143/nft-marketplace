import React from 'react'
import './liveAuction.css'
export default function LiveAuction() {
  return (
  <>
  <div className="auction">
    <div className="auctionTitle">
        <p className="auctionHead">
            Live Auction
        </p>
        <p className="auctionMoto">
        The largest and unique Super rare NFT marketplace <br />
        For crypto-collectibles
        </p>
    </div>
    <div className="auctionItems">
        <img src="/nft-marketplace-content/card.png" alt="item1" className='item3 item'/>
        <img src="/nft-marketplace-content/card.png" alt="item2" className='item4 item'/>
        <img src="/nft-marketplace-content/card.png" alt="item3" className='item5 item'/>
    </div>
  </div>

  </>
  )
}
