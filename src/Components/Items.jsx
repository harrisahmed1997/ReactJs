import React from 'react'
import './style.css';

import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import icon4 from './images/icon-4.png';

const Items = () => {
    const data = [
        {
            item: "Menu 1",
            image: icon1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla?"
        },
        {
            item: "Menu 2",
            image: icon2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla?"
        },
        {
            item: "Menu 3",
            image: icon3,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla?"
        },
        {
            item: "Menu 4",
            image: icon4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla?"
        },
    ]

    return (
        <section className='itemsParent'>
            <h1 className='h1-about'>Our Menu</h1>
            <div className="items">
                {data.map((menu) => {
                    return (
                        <div class="menu">
                            <div className="image">
                                <h1>{menu.item}</h1>
                                <img src={menu.image} alt="" />
                                <p>{menu.text}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Items