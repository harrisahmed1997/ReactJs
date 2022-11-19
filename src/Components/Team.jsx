import React from 'react'
import './style.css';
import gallery1 from './images/our-team-1.jpg';
import gallery2 from './images/our-team-2.jpg';
import gallery3 from './images/our-team-3.jpg';
import gallery4 from './images/our-team-4.jpg';
import gallery5 from './images/our-team-5.jpg';
import gallery6 from './images/our-team-6.jpg';
const Team = () => {
    const data = [

        {
            id: 1,
            image: gallery1,
            name: "John Doe"
        },
        {
            id: 2,
            image: gallery2,
            name: "John Doe"
        }, {
            id: 3,
            image: gallery3,
            name: "John Doe"
        }, {
            id: 4,
            image: gallery4,
            name: "John Doe"
        }, {
            id: 5,
            image: gallery5,
            name: "John Doe"
        }, {
            id: 6,
            image: gallery6,
            name: "John Doe"
        },

    ]
    return (
        <div className='teamParent'>
            <h1 className='h1-about'>Our Team Members</h1>
            <div className="team">
                {data.map((element) => {
                    return (
                        <div className="team-player">
                            <div className="image">
                                <img src={element.image} width="100%" alt="" />
                            </div>
                            <h4>{element.name}</h4>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Team