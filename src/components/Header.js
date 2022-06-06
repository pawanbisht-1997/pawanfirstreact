import React from 'react'

export const Header = () => {
  return (
    <section>
    <div className="topbar">
        <div className="container">
            <div className="flex align-center spce-btwn">
                <div className="flex align-center">
                    <div className="phon-number">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p>(+880) 1234567890</p>
                    </div>
                    <div className="mail">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <p>rockyhills@gmail.com</p>
                    </div>
                </div>
                <div className="social-sections">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    <header className="header">
        <div className="container">
            <div className="flex spce-btwn align-center">
                <div className="logo">
                    <img src="./Assets/img/logo.png"/>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">classes</a></li>
                    </ul>
                </div>
                <div className="contact-btn">
                    <li><a href="#" className="glbl-btn">Contact Us</a></li>
                </div>
            </div>
        </div>
    </header>
    </section>
    
  )
}
