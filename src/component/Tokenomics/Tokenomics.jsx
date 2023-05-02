import React from 'react'
import data from './data'
import './tokonomics.css'
import Card from '../../card/Card'

const Tokenomics = () => {
  return (
    <div >
    <div className="container hero_inner-cont">

        <div className="title"> <h2>Socials</h2></div>
        <div className="card-holder">
        {
          data.map( item => 
          <Card key={item.id} className = "t__card">
            <span className="t__card-icon">{item.icon}</span>
            <h5>{item.title}</h5>
            <small>{item.desc}</small>
          </Card>)
        }
        </div>
    </div>
</div>
  )
}

export default Tokenomics