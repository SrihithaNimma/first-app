import React from 'react'
import { color, motion } from 'framer-motion';
import { useState } from 'react';
import './AboutUs.css';
import image1 from '../images/user.png';
function AboutUs() {
    let [card1,setcard1]=useState(1);
    let changecard1=()=>{
        if(card1===1) setcard1(2)
        if(card1===2) setcard1(1)
    }
    let [card2,setcard2]=useState(3);
    let changecard2=()=>{
        if(card2===3) setcard2(4)
        if(card2===4) setcard2(3)
    }
    let [card3,setcard3]=useState(5);
    let changecard3=()=>{
        if(card3===5) setcard3(6)
        if(card3===6) setcard3(5)
    }
    let [card4,setcard4]=useState(7);
    let changecard4=()=>{
        if(card4===7) setcard4(8)
        if(card4===8) setcard4(7)
    }
   {/* let [card5,setcard5]=useState(9);
    let changecard5=()=>{
        if(card5===9) setcard5(10)
        if(card5===10) setcard5(9)
    }
    let [card6,setcard6]=useState(11);
    let changecard6=()=>{
        if(card6===11) setcard6(12)
        if(card6===12) setcard6(11)
    }
    let [card7,setcard7]=useState(13);
    let changecard7=()=>{
        if(card7===13) setcard7(14)
        if(card7===14) setcard7(13)
    }
    let [card8,setcard8]=useState(15);
    let changecard8=()=>{
        if(card8===15) setcard8(16)
        if(card8===16) setcard8(15)
    } */}
  return (
        <div className='about'>
        <div className='card1'>
           {/* <p className='head1'>Our Mission</p> */}
            <p className='info1'>ATLAST is a startup focused on revolutionizing the transportation industry through sustainable and eco-friendly solutions. We believe in the potential of hydrogen fuel cell technology and aim to lead the charge in this industry. We are committed to providing clean and efficient transportation to everyone, regardless of their location. ATLAST is dedicated to designing and producing hydrogen fuel cell vehicles that meet high standards of safety, reliability, and performance, and they are determined to shape the future of mobility through our innovative approach.</p>
        </div>
    {/*    <div className='card2' 
        style={{
            backgroundImage:"url(/onestep.jpg)",
            backgroundSize:'cover',
            backgroundRepeat:'none',
            backgroundPosition:'center',
            }}>
            <p className='head2'>Our Step towards Sustainability</p>
            <p className='info2 '>   ATLAST is a student startup focused on revolutionizing the transportation industry through sustainable and eco-friendly solutions. We believe in the potential of hydrogen fuel cell technology and aim to lead the charge in this industry. We are committed to providing clean and efficient transportation to everyone, regardless of their location. ATLAST is dedicated to designing and producing hydrogen fuel cell vehicles that meet high standards of safety, reliability, and performance, and they are determined to shape the future of mobility through our innovative approach.</p>
        </div> */}
        <div className='row'>
            <div className='col-1'></div>
        <div className='c-1 col-5'>
        <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard1} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Gopichand Anumolu</motion.h2>
        <motion.p Layout="position" className='designation'>Founder and CEO of ATLAST</motion.p>
        </div>
        {card1==2 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Gopichand is the founder of ATLAST. He personally looks into vehicle powertrain, fuel cell, storage and balance of plant.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        
        </div>

        <div className='c-2 col-5'>
        <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard2} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Aditya Pramod Kotha</motion.h2>
        <motion.p Layout="position" className='designation'>Mechanical Design Engineer</motion.p>
        </div>
        {card2==4 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Aditya takes care of vehicle dynamics. He calculates various dynamics of the vehicles and handovers those metrics to the design team.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        </div>
        <div className='col-1'></div>
        </div>
       <div className='row'>
       <div className='col-1'></div>
       <div className='c-3 col-5'>
       <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard3} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Vishnu Sai Sharan A</motion.h2>
        <motion.p Layout="position" className='designation'>Aesthetics Engineer </motion.p>
        </div>
        {card3==6 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Sharan takes care of vehicle aesthetics, body design and overlooks the vehicle powertrain. Vehicle design starts with rough sketches to world class designs made by our aesthetics engineer Sharan.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        
        </div>

        <div className='c-4 col-5'>
        <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard4} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Nikhil Swamy</motion.h2>
        <motion.p Layout="position" className='designation'>Production Engineer</motion.p>
        </div>
        {card4==8 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Nikhil is the production engineer. All the prototyping and fabrication lead is taken care by Nikhil.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        <div className='col-1'></div>

        </div>

       </div>
 {/*   <div className='row'>
    <div className='col-1'></div>

    <div className='c-5 col-5'>
    <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard5} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Aditya Pramod Kotha</motion.h2>
        <motion.p Layout="position" className='designation'>Mechanical Design Engineer</motion.p>
        </div>
        {card5==10 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Aditya takes care of vehicle dynamics. He calculates various dynamics of the vehicles and handovers those metrics to the design team.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        </div>

        <div className='c-6 col-5'>
        <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard6} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Dr. Ajay Kumar Kaviti </motion.h2>
        <motion.p Layout="position" className='designation'>Associate Professor, Mechanical Engineering</motion.p>
        </div>
        {card6==12 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Dr. Ajay is one of the advisors to the team. He had a good amount of experience in the renewable energy systems.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        </div>
        <div className='col-1'></div>
    </div>
        
<div className='row'>
<div className='col-1'></div>

<div className='c-7 col-5'>
<motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard7} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >N. Krishna Kumari</motion.h2>
        <motion.p Layout="position" className='designation'>Associate Professor, Electrical and Electronics Engineering</motion.p>
        </div>
        {card7===14 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Dr. Krishna Kumari is advisor to the team, she advises the team in Electrical Systems.</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        </div>

        <div className='c-8 col-5'>
        <motion.div 
        transition={{Layout:{duration:1}}}
        Layout 
        style={{
            boxShadow:"0px 10px 30px rgba(0 0 0 0.5)",
            }}
        onClick={changecard8} className="cards">
        <div className='heading'>
      <motion.h2 Layout="position" >Kiran Chakravarthula</motion.h2>
        <motion.p Layout="position" className='designation'>Associate Professor Convener, Institute Innovation Council-Manager VJ Hub</motion.p>
        </div>
        {card8==16 && (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='expand d-flex'>
        <div>
        <motion.p className='p' width="400px">Dr. Kiran is the Business advisor to the team. His advisory include Design Thinking for Product Development</motion.p>

        </div>
        <div><img className='image1' src={image1}></img></div>
   
        </motion.div>
        )}
        </motion.div>
        <div className='col-1'></div>

        </div>
    
        </div> */}
    </div>
  )
}

export default AboutUs