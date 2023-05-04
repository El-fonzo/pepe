import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './abtt.css'


const Abtt = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='  abtt-container' >
        <div className="container abtt-inner">
            <div className="right-text" data-aos="fade-up"data-aos-duration="3000">
            <p className='right-text__heading'>LIGMANOMICS</p>

            <h2>There's no curing <span>$LIGMA</span>, ape and get infected.
            </h2>
            </div>
            <div className="left-text" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <p>We're here to ligma balls, nothing else. No secret sale,
                   no seed, no taxes. Only have 2% for strategic partnerships and 2% for listings. 
                  </p>
            </div>
        </div>
       
       
    </div>
  )
}

export default Abtt
