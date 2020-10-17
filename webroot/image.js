import React from 'react'

function Image (props) {
  return (
 <li>
   <img src ={props.src} className = {props.alt}/>{props.name}
 </li>
  )
}
export default Image;
