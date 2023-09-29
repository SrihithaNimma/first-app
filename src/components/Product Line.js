import React, { useEffect } from 'react'
import im1 from '../images/bike1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product Line.css';
function ProductLine() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <div className='animation1' data-aos="zoom-in">
        <div className='card1'>
          <div className="col-md-1"></div>
        <div className="col-md-9" style={{textAlign:"justify",fontFamily:"'Montserrat', sans-serif",fontFamily:"'Pathway Extreme', sans-serif",paddingTop:"70px",paddingBottom:"50px",paddingLeft:"70px"}} >
        <p className='head1'><b >Hydrogen Fuel Cell Technology</b></p>
        <p>Hydrogen is the simplest and most abundant element in the universe. It is a major component of water, oil, natural gas, and all living matter. Despite its simplicity and abundance, hydrogen rarely occurs naturally as a gas on Earth. It is almost always combined with other elements. It can be generated from oil, natural gas, and biomass or by splitting water using renewable solar or electrical energy.
          Once hydrogen is produced as molecular hydrogen, the energy present within the molecule can be released, by reacting with oxygen to produce water. This can be achieved by either traditional internal combustion engines, or by devices called fuel cells. In a fuel cell, hydrogen energy is converted directly into electricity with high efficiency and low power losses.
          Hydrogen, therefore, is an energy carrier, which is used to move, store, and deliver energy produced from other sources.
        </p>
        </div>
        </div>
      </div>

      <div className='animation1' data-aos="zoom-in">
        <div className='card1'>
          <div className="col-md-1"></div>
        <div className="col-md-9" style={{textAlign:"justify",fontFamily:"'Montserrat', sans-serif",fontFamily:"'Pathway Extreme', sans-serif",paddingTop:"70px",paddingBottom:"50px",paddingLeft:"70px"}} >
        <p className='head1'><b >Hydrogen Fuel Cell Technology</b></p>
        <p>Hydrogen is the simplest and most abundant element in the universe. It is a major component of water, oil, natural gas, and all living matter. Despite its simplicity and abundance, hydrogen rarely occurs naturally as a gas on Earth. It is almost always combined with other elements. It can be generated from oil, natural gas, and biomass or by splitting water using renewable solar or electrical energy.
          Once hydrogen is produced as molecular hydrogen, the energy present within the molecule can be released, by reacting with oxygen to produce water. This can be achieved by either traditional internal combustion engines, or by devices called fuel cells. In a fuel cell, hydrogen energy is converted directly into electricity with high efficiency and low power losses.
          Hydrogen, therefore, is an energy carrier, which is used to move, store, and deliver energy produced from other sources.
        </p>
        </div>
        </div>
      </div>


      <div className='animation1' data-aos="zoom-in">
        <div className='card1'>
          <div className="col-md-1"></div>
        <div className="col-md-9" style={{textAlign:"justify",fontFamily:"'Montserrat', sans-serif",fontFamily:"'Pathway Extreme', sans-serif",paddingTop:"70px",paddingBottom:"50px",paddingLeft:"70px"}} >
        <p className='head1'><b >Hydrogen Fuel Cell Technology</b></p>
        <p>Hydrogen is the simplest and most abundant element in the universe. It is a major component of water, oil, natural gas, and all living matter. Despite its simplicity and abundance, hydrogen rarely occurs naturally as a gas on Earth. It is almost always combined with other elements. It can be generated from oil, natural gas, and biomass or by splitting water using renewable solar or electrical energy.
          Once hydrogen is produced as molecular hydrogen, the energy present within the molecule can be released, by reacting with oxygen to produce water. This can be achieved by either traditional internal combustion engines, or by devices called fuel cells. In a fuel cell, hydrogen energy is converted directly into electricity with high efficiency and low power losses.
          Hydrogen, therefore, is an energy carrier, which is used to move, store, and deliver energy produced from other sources.
        </p>
        </div>
        </div>
      </div>

      <div className='top'>
        <div className='animation' data-aos="fade-up"></div>
        <div className='animation' data-aos="fade-down"></div>
        <div className='animation' data-aos="fade-left"></div>
        <div className='animation' data-aos="fade-right"></div>
        <div className='animation' data-aos="flip-right"></div>
        <div className='animation' data-aos="zoom-in"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-9" style={{textAlign:"justify",fontFamily:"'Montserrat', sans-serif",fontFamily:"'Pathway Extreme', sans-serif",paddingTop:"70px",paddingBottom:"50px",paddingLeft:"70px"}} >
        <p className='head1'><b >Hydrogen Fuel Cell Technology</b></p>
        <p>Hydrogen is the simplest and most abundant element in the universe. It is a major component of water, oil, natural gas, and all living matter. Despite its simplicity and abundance, hydrogen rarely occurs naturally as a gas on Earth. It is almost always combined with other elements. It can be generated from oil, natural gas, and biomass or by splitting water using renewable solar or electrical energy.
          Once hydrogen is produced as molecular hydrogen, the energy present within the molecule can be released, by reacting with oxygen to produce water. This can be achieved by either traditional internal combustion engines, or by devices called fuel cells. In a fuel cell, hydrogen energy is converted directly into electricity with high efficiency and low power losses.
          Hydrogen, therefore, is an energy carrier, which is used to move, store, and deliver energy produced from other sources.
        </p>
        </div>
        <div>
          <img src={im1} style={{marginLeft:"270px",width:"700px",height:"350px",marginBottom:"50px"}}></img>
        </div>
       <div className='col-md-1'></div>



       <p className='head1' style={{textAlign:"center",fontFamily:"'Montserrat', sans-serif",fontFamily:"'Pathway Extreme', sans-serif"}}>Advantanges of Hydrogen Fuel Cell</p>
       <div>
    <div className='row d-flex projects'>
<div className='procards card '>
<div className='card-body'>
<h5 className='card-heading' style={{textAlign:"center"}}>Pro1</h5>
<p className='card-content' style={{textAlign:"justify"}}>Hydrogen fuel cell technology provides a high-density source of energy with good energy efficiency.High pressure gaseous and liquid hydrogen have around three times the gravimetric energy density (around 120MJ/kg) of diesel and LNG and a similar volumetric energy density to natural gas. </p>
</div>
</div>
<div className='procards card'>
<div className='card-body'>
<h5 className='card-heading' style={{textAlign:"center"}}>Pro2</h5>
<p className='card-content' style={{textAlign:"justify"}}>Hydrogen fuel cell technology provides a high-density source of energy with good energy efficiency.High pressure gaseous and liquid hydrogen have around three times the gravimetric energy density (around 120MJ/kg) of diesel and LNG and a similar volumetric energy density to natural gas. </p>
</div>
</div>
    </div>
    <div className='row d-flex projects'>
<div className='procards card '>
<div className='card-body'>
<h5 className='card-heading' style={{textAlign:"center"}}>Pro3</h5>
<p className='card-content' style={{textAlign:"justify"}}>Hydrogen fuel cell technology provides a high-density source of energy with good energy efficiency.High pressure gaseous and liquid hydrogen have around three times the gravimetric energy density (around 120MJ/kg) of diesel and LNG and a similar volumetric energy density to natural gas. </p>
</div>
</div>
<div className='procards card'>
<div className='card-body'>
<h5 className='card-heading' style={{textAlign:"center"}}>Pro4</h5>
<p className='card-content' style={{textAlign:"justify"}}>Hydrogen fuel cell technology provides a high-density source of energy with good energy efficiency.High pressure gaseous and liquid hydrogen have around three times the gravimetric energy density (around 120MJ/kg) of diesel and LNG and a similar volumetric energy density to natural gas. </p>
</div>
</div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default ProductLine