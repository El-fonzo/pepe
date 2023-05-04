import React from 'react'
import data from './data'
import Card from '../../card/Card'
import "./about.css"


function About() {

       
    
    
  return (
    <div >
   
       <div className="container hero_inner-cont">
    
            <div className="title"> 

            
            <h2>Our Utility</h2>
            <p>"Make a Splash in the Bearish Market: Unite with Our Strong Community and Gain Utility with the Rising Meme Coin of 2023</p>
            </div>
            <div className="card-holder">
            {
              data.map( item => 
              <Card key={item.id} className = "about__card">
                <span className= {`${item.className} about__card-icon `}>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>)
            }
            </div>
        
                    {/* <div className="  hero__inner-cont__right">
                        <img src= {pepe} alt=""  className="image"/>
                        
                    </div>
                
                    <div className="  hero__inner-cont__left ">
                        <h1 className="">$Pepe</h1>
                        <p className="">We assist and connect businesses to markets and 
                        researchers to gather quality, useful, and factual insights to inform 
                        their business strategies and plans for business growth</p>
                
                    </div>
              */}
        </div>
    </div>
  )
}

export default About