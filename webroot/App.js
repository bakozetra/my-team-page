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
      <Image src={ImageOne}  alt="ImageOne" name="Bill Mahoney" job = "Product owner" />
      <Image src={ImageTwo}  alt="ImageTwo" name="Saba cabrera " job = "Art director"/> 
      <Image src={ImageThree}  alt="ImageThree" name="shae Le" job = "Tech lead"/>
      <Image src={ImageFour}  alt="ImageFour" name="Skylah Lu " job = "Ux disigner"/>
      <Image src={ImageFive}  alt="ImageFive" name="Griff Richards " job = "developer"/>
      <Image src={ImageSix}  alt="ImageSix" name= "Stan John " job = "deverloper"/>
    </ul>
  )
}
export default App;