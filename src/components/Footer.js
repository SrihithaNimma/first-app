import React from 'react';
import {forwardRef} from 'react';
import './Footer.css';
import Clock from './Clock';
import ima1 from '../images/atlastlogo.jpg'
import ima3 from '../images/mail.png'
import ima4 from '../images/location.png'
import ima2 from '../images/instagram.png'
import ima5 from '../images/linkedin.png'
function Footer(props) {
  
  return (
    
   <div ref={props.footerref}>
    <footer className="footer border border-2 border-right-0">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div className="v">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={ima1} className='col-4 logo1'/>
            </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className='contact'>
          <h5>Contact</h5>
            <h5>
            <a href="mailto:connectatlast@gmail.com" className="text-reset">Mail↗</a>
          </h5>
          <h5>
            <a href="https://www.google.com/maps/place/MECHANICAL+AND+CIVIL+LAB,+VNR+COLLEGE,+Hanuman+Marg,+Whisper+Valley,+Hyderabad,+Telangana+500090/@17.5372971,78.3840634,19.36z/data=!4m9!1m2!2m1!1svj+hub+vnr!3m5!1s0x3bcb8e0abb092be9:0x664f40f6bfd581b0!8m2!3d17.5375274!4d78.3851559!16s%2Fg%2F11cpbfbytr" className="text-reset">Map us↗</a>
          </h5>
          </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <div className='social'>
          <h5>Social</h5>
          <h5>
            <a href="https://www.instagram.com/atlast.inc/" className="text-reset">Instagram↗</a>
          </h5>
          <h5>
            <a href="https://www.linkedin.com/company/atlast-official/" className="text-reset">LinkedIn↗</a>
          </h5>
          </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div className="clock1">

      <div>
       <Clock/>
      </div>
      <div class="pt-3 lead text-white">Hyderabad, India</div>
      <div class="time lead text-white">06:48:21</div>
      

            
        </div>
        </div>
      </div>





{/*}      <div class="row ">
        <div class="col"></div>
        <div class="col">
          <div class="card1" style={{height:"250px"}}>
            <div className='col'>
              <h5>NEWSLETTER</h5>
              <p>Sign up for updates!</p>
            </div>
            <form className='col'>
              <input className="input1"  id="name" placeholder='Name'/><br/>
              <input className="input2"  type="email" id="email" placeholder='Email'/><br/><br/>
              <button type="submit" class="btn btn-light">Submit</button>
            </form>
          </div>
        </div>
  </div>  */}



    <div className='newsletter'>
          <h5>NEWSLETTER</h5>
          <p>Sign up for updates!</p>
          <form>
            <input className="input1"  id="name" placeholder='Name'/><br/>
            <input className="input2"  type="email" id="email" placeholder='Email'/><br/><br/>
            <button type="submit" class="btn btn-light">Submit</button>
            {/* <input className='' type="submit"/>  */}
          </form>
        </div>  

    </div>
    </footer>
  </div>

  )
}
export default forwardRef(Footer);