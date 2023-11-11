import React from 'react'
import './FirstPage.css';

export default function FirstPage() {
  return (
    <>
    <img src="/nft-marketplace-content/eclipse.png" alt="" className="eclipse" />
    <div className='titleCard'>
        <p className="webTitle1">Super NFT</p>
        <p className="webTitle2">Marketplace</p>
        <img src="/nft-marketplace-content/pulse.png" alt=""  className='pulseImg'/>
         <p className='webTitleDis'>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>

        <div className="createNFT">

         <button id='btnConnectWallet'>connet wallet</button>

         <div className='connectWallet'>

            <p id='nft1'>create NFT </p>
            <img src="/nft-marketplace-content/arrow.png" alt="" className='arrow1'/>

         </div>
      </div>
      <div className="searchData">
      <p className="contentTitle1">Last 7 days popular search</p>
         <div className="btnSearchList1">
            <button className="btn btn1">All</button>
            <button className="btn">Music</button>
            <button className="btn">3D Abstract</button>
            <button className="btn">Game</button>
         </div>
         <div className="btnSearchlist2">
            <button className="btn">Sport</button>
            <button className="btn">Castoon</button>
            <button className="btn">Virtual world</button>
            <button className="btn">Sport</button>
          </div>
        </div>

    </div>
    </>
  )
}
