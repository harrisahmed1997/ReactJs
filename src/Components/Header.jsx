import React from 'react'
import logo from './images/logo.png'

const Header = () => {
    return (
        <div>
            <div class="nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <img src={logo} width="40" alt="" />
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <a href="#">Home</a><a href="#">About</a><a href="#">Services</a><a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header