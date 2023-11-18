import React from 'react'
import'./roadmapContBox.css'
export default function RoadmapContBox(props) {
  return (
   <>
    <div className="contentBox">
        <p className="month">
           {props.month}
        </p>
        <p className="contHead">
            {props.head}
        </p>
        <p className="cont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet dolor similique quae facilis doloremque totam eligendi dolorum nisi eum.
        </p>
    </div>
   </>
  )
}
