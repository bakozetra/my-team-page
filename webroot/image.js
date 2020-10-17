import React from 'react'

function Image (props) {
  return (
 <li>
    <p>
    {props.name && <small>{props.job}</small>}
    </p>
    <img src ={props.src} className={props.alt}/>
    <p className = "name">{props.name}</p>
 </li>
  )
}
export default Image;
