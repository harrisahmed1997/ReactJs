import React from 'react'
import './style.css';
import menu1 from './images/menu-1.png';
import menu2 from './images/menu-2.png';
import menu3 from './images/menu-3.png';
import menu4 from './images/menu-4.png';
import menu5 from './images/menu-5.png';
import menu6 from './images/menu-6.png';
const Menu = () => {
    const data = [
        {
            id: 1,
            title: "Hot Coffee",
            image: menu1
        },
        {
            id: 2,
            title: "Hot Coffee",
            image: menu2
        }, {
            id: 3,
            title: "Hot Coffee",
            image: menu3
        }
        , {
            id: 4,
            title: "Hot Coffee",
            image: menu4
        }
        , {
            id: 5,
            title: "Hot Coffee",
            image: menu5
        },
        {
            id: 6,
            title: "Hot Coffee",
            image: menu6
        }
    ]
    return (
        <div className='menuParent'>
            <div className="menu">
                <h1 className='h1-about'>Our Hot Menu</h1>
                <div className="item-menus">
                    {data.map((element) => {
                        return (
                            <div keys={element.id} className="hotcoffees">
                                <div className="image">
                                    <img src={element.image} alt="" />
                                    <h1>{element.title}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu