import React, { useState,useEffect } from 'react'
import {Parallax} from 'react-parallax';
import img1 from '../images/ach1.jpg'
import img3 from '../images/e-summit.png'
import img4 from '../images/ach4.jpg'
import img6 from '../images/IEEE.jpeg'
import img7 from '../images/Boeing.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Achievements.css'
function Achievements() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <div>
<div className='cont'>
    <div className='animation2' data-aos="fade-left">
      <div className="card1 border-0  ">
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 ">
        <img   src={img1}  width="400px" height="300px" alt=""/>
        </div>
        <div className="col-md-5">
                <p className='head1'><b >IDAPT CHALLENGE</b></p>
                <p>
                Our  startup secured the runner-up position in the IDAPT challenge conducted by the 
                Indian Institute of Technology (IIT) BHU Under the aegis of NM-ICPS 
                (DST, Govt. of India) , demonstrating our innovation and creativity in technology. 
                The IDAPT challenge is a platform created to encourage startups to showcase their 
                technological solutions that can make a positive impact on society. The challenge 
                provides a competitive environment where startups can present their ideas and innovations
                to a panel of judges and receive recognition for their efforts.
                </p>
        </div>
        <div className="col-md-1"></div>
    </div>
</div>
</div>








<div className="card3 border-0 p-5">
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
            <img src={img3} width="400px" height="300px" alt=""/>
        </div>
        <div className="col-md-5 ps-5">
        <p className='head1'><b >E-SUMMIT'23</b></p>
            <p>
            ATLAST has secured second position in E-Summit'23 hosted by Mahindra University on 16 Feb 2023. 
            E-Summit encourages ambitious students to come up with innovative ideas for solving various
            societal problems through competitions like Business Ideation .Business Ideation is for all those 
            innovative students with creative ideas to pitch in their ideas .
            </p> 
        </div>
        <div className='col-md-2'></div>
    </div>
</div>



<div className="card4 border-0 p-5 ">
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
        <p className='head1'><b >ICON INNOVATIVE CONFERENCE</b></p>
            <p>
            ATLAST won Second Runner up in Icon Innovative conference Amalthea 22 hosted by IIT  Gandhinagar on
            7/1/2023.  Icon, in collaboration with IBM, is the perfect event for aspiring entrepreneurs
            .Icon is the Innovation Conference of Amalthea, a platform for young entrepreneurs to 
            collaborate with innovative ideas. Participants are supposed to present their ideas to the 
            judges and receive constructive suggestions. This time, ICon would like to invite projects
            based on the theme: “Technological Innovations for Sustainable Development.”
            </p>
        
        </div>
        <div className="col-md-4 ">
            <img src={img4} width="350px" height="280px" alt=""/>
        </div>
       <div className='col-md-1'></div>
    </div>
</div>


<div className="card6 border-0 p-5 ">
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5 pe-4">
        <p className='head1'><b >IEEE RETURNING MOTHERS CONFERENCE'22-IDEATHON</b></p>
            <p>
            Won 1st  Prize in IEEE Returning Mothers Conference 2022 Ideathon.The IEEE Returning Mothers
            Conference 2022 Ideathon is an innovation challenge organized by the Institute of Electrical
            and Electronics Engineers (IEEE) to support mothers who wish to return to the workforce 
            after a break. The challenge invites participants to develop innovative solutions that can 
            help returning mothers overcome the challenges of re-entering the workforce and balance work
            and family responsibilities.This helped us realize the impact and the purpose of our
            mission.
            </p>
            
        </div>
        <div className="col-md-5">
            <img src={img6} width="400px" height="300px" alt=""/>
        </div>
       <div className='col-md-1'></div>
    </div>
</div>
<div className="card7 border-0 p-5">
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
            <img src={img7} width="350px" height="300px" alt=""/>
        </div>
        <div className="col-md-5 col-sm-6">
        <p className='head1'><b>BOEING BUILD 2.0 REGIONAL CHALLENGE</b></p>
            <p>
            National Finalist at Boeing BUILD 2.0 during Jan - Feb 2023 .
            The Boeing University Innovation Leadership Development (BUILD) program is designed by 
            Boeing India for graduates and early stage startup entrepreneurs in the country. BUILD 
            aims to encourage young entrepreneurial minds to develop ideas that can be converted 
            into viable business offerings, aligned with Boeing’s vision of contributing to India’s 
            robust startup culture.
        </p>
        </div>
        <div className='col-md-1'></div>
    </div>
</div>
    </div>
</div>
  )
}


export default Achievements