import './ImageWrapper.css'
import Image2 from '../../assets/hero-desktop.jpg'
function ImageWrapper(){
    return(
        <div id='leftdiv'>
            <img src={Image2} id='img1'/>
        </div>
    )
}
export default ImageWrapper