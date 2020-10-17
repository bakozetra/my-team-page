import React from 'react'
import Image from './image'
import ImageOne from './image/photo1.png'
import ImageTwo from './image/photo2.png' 
import ImageThree from './image/photo3.png' 
import ImageFour from './image/photo4.png' 
import ImageFive from './image/photo5.png' 
import ImageSix from './image/photo6.png' 

// import ImageTwo from  './image/photo2.png'

function App() {
  return (
    <ul>
      <Image src={ImageOne}  alt="ImageOne" name= "Bill Mahoney"/>
      <Image src={ImageTwo}  alt="ImageTwo" name= "Saba cabrera "/>
      <Image src={ImageThree}  alt="ImageThree" name= "shae Le "/>
      <Image src={ImageFour}  alt="ImageFour" name= "Skylah Lu "/>
      <Image src={ImageFive}  alt="ImageFive" name= "Griff Richards "/>
      <Image src={ImageSix}  alt="ImageSix" name= "Stan John "/>
    </ul>
  )
}
export default App;