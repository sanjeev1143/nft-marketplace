import React from 'react'
import './FirstPage.css';
import './Pattern.css';

export default function FirstPage() {
  return (
    <>
    <img src="/nft-marketplace-content/star.svg" alt="" id='star1' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star2' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star3' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star4' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star5' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star6' className='star' />
    <img src="/nft-marketplace-content/star.svg" alt="" id='star7' className='star' />
    <img src="/nft-marketplace-content/linePattern.png" alt="" id='linePattern'/>
    <img src="/nft-marketplace-content/icon.png" alt="" id='icon1'/>
     
     <div className="homepage">
    
      <div className="leftSection"> 
      <img src="/nft-marketplace-content/eclipse.png" alt="" className="eclipse1 eclipse" />
      <img src="/nft-marketplace-content/eclipse.png" alt="" className="eclipse2 eclipse" />
         
         <div className='titleCard'>
      
        <p className="webTitle1">Super NFT</p>
        <p className="webTitle2">Marketplace</p>
        <img src="/nft-marketplace-content/pulse.png" alt=""  className='pulseImg'/>
         <p className='webTitleDis'>The largest and unique Super rare NFT marketplace <br />For crypto-collectibles</p>

        <div className="createNFT">

         <button id='btnConnectWallet1'>connet wallet</button>

         <div className='connectWallet'>

            <a href='#home' id='nft1'>create NFT </a>
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
            <button className="btn">Classic</button>
          </div>
        </div>

         </div>
      </div>
      <div className="rightSection">
      <img src="/nft-marketplace-content/card.png" alt="item1" className='item1 artFrame'/>
      <img src="/nft-marketplace-content/card.png" alt="item2" className='item2 artFrame'/>
      </div>
   </div>
   </>
  )
}
