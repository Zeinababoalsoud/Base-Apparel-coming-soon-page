import './Content.css'
import Btnimg from '../../assets/icon-arrow.svg'
import hiddenImg from '../../assets/hero-mobile.jpg'
import Navbar from '../navbar/Navbar'
function Content(){
    return(
        <div id='maincontainer'>
            <Navbar></Navbar>
            <div id='content'>
                <img src={hiddenImg} id="hiddenImg"/>
                <label id="lab1"> we&apos; re</label>
                <label className='lab2'> Comimg</label>
                <label className='lab2'> soon</label>
                <p> Hello fellow shoppers! We&apos; re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals. </p>
                <div id='inputBtn'>
                    <input type="email" id='in' placeholder='Email Address'/> 
                    <button><img src={Btnimg}/></button>      

                </div>
            

            </div>
        </div>
    )
}
export default Content