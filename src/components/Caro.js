import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img from '../images/caro2.jpg'
import img1 from '../images/e-summit.png'
import img2 from '../images/thub.png'
import img3 from '../images/caro1.jpg'
import img5 from '../images/card2.avif'
import img6 from '../images/card1.avif'
import img7 from '../images/card3.avif'
import img8 from '../images/card4.avif'
import img9 from '../images/adv.jpg'
import video from '../images/firstvideofinal.mp4'
import  './Caro.css'
function Caro() {
  return (
    <div className='head'>
      <div className='first'>
        <div className='first-video' style={{width:'100%'}} >
      <video autoPlay loop muted id='video' style={{height:'501px' ,width:'100%'}} >
        <source src={video} type='video/mp4'/>
      </video>
      </div>
      <div className='first-text'>A&nbsp;T&nbsp;L&nbsp;A&nbsp;S&nbsp;T</div>
    </div>
    <div className='row pb-5 pe-3 section-1'>
<div className='col-md-1'> </div>
<div className='col-md-5 pt-5 pb-2'>
<Carousel>
      <Carousel.Item>
        <img src={img}
          className="d-block w-100"
          height="400px"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400px"
          src={img3}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400px"
          src={img2}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400"
          src={img1}
          alt="fourth slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
<div className='col-md-6'>
  <div className='caption'>
<p><b> Our Step Towards Sustainability </b></p>
</div>
<p className='lead'>In the broadest sense, sustainability refers to the ability to maintain or support a process continuously over time. In business and policy contexts, sustainability seeks to prevent the depletion of natural or physical resources, so that they will remain available for the long term.</p>
</div>
</div>
<div>
    <div className='row d-flex projects'>
<div className='procards card '>
<div className='card-body'>
  <img src={img5} width="150px" height="120px" className='cardimg'></img>
<h5 className='card-heading'>Hydrogen Fuel Cell Powered Multiutility Motorcycle </h5>
<p className='card-content'>A motorcycle emits 100 grams of CO2 per every kilometer it travels. Over the course of its lifetime of 100,000 kilometers, this would result in the emission of 10,000 kilograms of CO2. It is worth noting that a single tree has the ability to absorb approximately 10 kilograms of CO2 per year. Still, it could take up to 1,000 years for a single tree to fully offset the emissions from a motorcycle. </p>
</div>
</div>
<div className='procards card'>
<div className='card-body'>
<img src={img6} width="150px" height="120px" className='cardimg'></img>
<h5 className='card-heading'>Hydrogen Fuel Cell Powered Multiutility Motorcycle </h5>
<p className='card-content'>A motorcycle emits 100 grams of CO2 per every kilometer it travels. Over the course of its lifetime of 100,000 kilometers, this would result in the emission of 10,000 kilograms of CO2. It is worth noting that a single tree has the ability to absorb approximately 10 kilograms of CO2 per year. Still, it could take up to 1,000 years for a single tree to fully offset the emissions from a motorcycle. </p>
</div>
</div>
    </div>
    <div className='row d-flex projects'>
<div className='procards card '>
<div className='card-body'>
<img src={img7} width="150px" height="120px" className='cardimg'></img>
<h5 className='card-heading'>Hydrogen Fuel Cell Powered Multiutility Motorcycle </h5>
<p className='card-content'>A motorcycle emits 100 grams of CO2 per every kilometer it travels. Over the course of its lifetime of 100,000 kilometers, this would result in the emission of 10,000 kilograms of CO2. It is worth noting that a single tree has the ability to absorb approximately 10 kilograms of CO2 per year. Still, it could take up to 1,000 years for a single tree to fully offset the emissions from a motorcycle. </p>
</div>
</div>
<div className='procards card'>
<div className='card-body'>
<img src={img8} width="150px" height="120px" className='cardimg'></img>
<h5 className='card-heading'>Hydrogen Fuel Cell Powered Multiutility Motorcycle </h5>
<p className='card-content'>A motorcycle emits 100 grams of CO2 per every kilometer it travels. Over the course of its lifetime of 100,000 kilometers, this would result in the emission of 10,000 kilograms of CO2. It is worth noting that a single tree has the ability to absorb approximately 10 kilograms of CO2 per year. Still, it could take up to 1,000 years for a single tree to fully offset the emissions from a motorcycle. </p>
</div>
</div>
    </div>
    </div>
<div className='section-3 row d-flex mt-5 pb-5'>
<div className='col-7'>
<p className='ps-5 caption'>Technological Advantages</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;Quick refueling time</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;Reduced dependence on fossil fuels</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;Quieter operation</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;High efficiency</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;Improved air quality</p>
<p className='ps-5 adv'>&#9679;&nbsp;&nbsp;Energy security</p>
</div>
<div className='col-5 hydrogenimg'>
<img src={img9} width="600px" />
</div>
</div>
    </div>

 
  )
}

export default Caro
