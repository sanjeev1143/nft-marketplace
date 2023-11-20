import React from 'react'
import './roadmap.css'
import RoadmapContBox from '../roadmapContBox/Contbox'
export default function Roadmap() {
  return (
<>
<div className="roadmap">


    <div className="roadmapTitle">
        <p className="roadmapHead">
            Live roadmap
        </p>
        <p className="roadmapMoto">
        The largest and unique Super rare NFT marketplace <br />
        For crypto-collectibles
        </p>
    </div>


    <div className="roadmapPath">
        <div className="leftPart">
            <div className="leftCont">
            <RoadmapContBox month="Janauary" head="Brief"/>
            <RoadmapContBox month="March" head="Discover"/>
            <RoadmapContBox month="May" head="Testing"/>

            </div>
        
            <div className="borderPatternLeft">
            <img src="/nft-marketplace-content/borderPatternRight.SVG" alt="" className='borderPatternRight' />
            <img src="/nft-marketplace-content/borderPatternRight.SVG" alt="" className='borderPatternRight' />
            <img src="/nft-marketplace-content/borderPatternRight.SVG" alt="" className='borderPatternRight'/>

        </div>
        </div>
            
      
          
    <div className="roadmapPattern">
        <div className="leftIndicator">
              <img src="/nft-marketplace-content/indicatorLeft.svg" alt="" className="leftArrow" />
              <img src="/nft-marketplace-content/indicatorLeft.svg" alt="" className="leftArrow" />
              <img src="/nft-marketplace-content/indicatorLeft.svg" alt="" className="leftArrow" />   
        </div>

          <div className="mid_line">
        
            <div className="lineCircle">

            <div className="linecircleGrp1">
                <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle01 circle0" />
                <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle02 circle0" />
        
             </div>

            <div className="linecircleGrp2">
                 <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle03 circle0" />
                 <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle04 circle0" />
            </div>

             <div className="linecircleGrp3">
                 <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle05 circle0" />
                <img src="nft-marketplace-content/smallEclipse.svg" alt="" className="circle06 circle0" />
            </div>
            </div>
          <img src="/nft-marketplace-content/Line.svg" alt="" className='line'/>
          </div>
        
        <div className="rightIndicator">
              <img src="/nft-marketplace-content/indicatorRight.svg" alt="" className="rightArrow" />
              <img src="/nft-marketplace-content/indicatorRight.svg" alt="" className="rightArrow" />
              <img src="/nft-marketplace-content/indicatorRight.svg" alt="" className="rightArrow" />   
            </div> 
        

          
  
            
        </div>

        <div className="rightPart">
                
            <div className="borderPatternRight1">
                <img src="/nft-marketplace-content/borderPatternLeft.SVG" alt="" className='borderPatternLeft1' />
                <img src="/nft-marketplace-content/borderPatternLeft.SVG" alt="" className='borderPatternLeft1' />
                <img src="/nft-marketplace-content/borderPatternLeft.SVG" alt="" className='borderPatternLeft1' />
            </div>
      
            <div className="rightCont">

                <RoadmapContBox month="February" head="Research"/>
                <RoadmapContBox month="April" head="Desgin"/>
                <RoadmapContBox month="June" head="Launch & Feedback"/>
            </div>

        </div>
                <img src="/nft-marketplace-content/eclipse0.svg" alt="" className="eclipse3 eclipse" />x
    </div>


</div>
  
</>
  )
}
