import React from 'react';
export const  Footer= () => {
  return (
        <div className='main-footer'>
                        <footer className="footer">
        <div className="container">
            <div className="flex spce-btwn ">
                <div className="footer-about">
                    <h4>ABOUT LIBRARIA</h4>
                    <img src="./Assets/img/logo.png" alt="footer-logo"/>
                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p>

                </div>
                <div className="footer-about">
                    <h4>QUICK LINKS</h4>
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About</a></li>
                    
                     <li><a href="#">Courses</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Contact Us</a></li>


                  </ul>
                </div>
                <div className="footer-about">
                    <h4>Timings</h4>
                  <ul>
                     <li><a href="#">9 am - 1 pm</a></li>
                     <li><a href="#">1 pm - 6 pm</a></li>
                     <li><a href="#">6 pm - 11 pm</a></li>
                     <li><a href="#">8 pm to 12pm</a></li>
                     <li><a href="#">8 pm to 12pm</a></li>
                     <li><a href="#">8 pm to 12pm</a></li>
                    


                  </ul>
                </div>
                <div className="footer-about ftr-contact">
                    <h4>Contact</h4>
                     <ul>
                      <li><div>21 King Street, Melbourne, Victoria 3000 Australia</div></li>
                      <li><div><a href="#">support@libraria.com</a></div></li>
                      <li><div><a href="#">+ 012-345-6789</a></div></li>
                      </ul>
                </div>
           
            </div>
        </div>
    </footer>
    <section className="copy-right">
        <p> Designed by weebinnoation@2022 Weeb Innovatio.All rights reserved.</p>

    </section>

            </div>
  )
}

