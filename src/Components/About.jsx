import React from 'react'
import './style.css';
import aboutimage from './images/about-img.svg';
const About = () => {
    return (
        <section className='aboutParent'>
            <h1 className='h1-about'>About Us</h1>
            <div className='about'>

                <div className="col-image">
                    <img src={aboutimage} alt="" />
                </div>

                <div className="col-aboutus">
                    <h1 >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis aspernatur vero, fugit, alias nesciunt totam odit asperiores, deserunt iure error quia voluptate soluta. Placeat minima ducimus reiciendis hic totam dolor perspiciatis illo molestiae enim esse? Porro obcaecati tempore incidunt?</p>

                    <button>Read More</button>
                </div>
            </div>

        </section>
    )
}

export default About