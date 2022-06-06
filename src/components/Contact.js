import React from 'react';
export const Contact = () => {
  return (
    <>
        <h2 className="text-center">Contact US</h2>
    <section className="contact"> 
           <div className="flex">
               <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.7959834477465!2d77.24313081508473!3d28.725642482381193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff50ae540507%3A0x65179913991177cf!2sRockleys%20Library!5e0!3m2!1sen!2sin!4v1654297266709!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <div className="right flex">
                    <div className="box">
                         <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                         <h4>Email Address</h4>
                         <p>Info@Infiniteitsolutions.Net</p>
                    </div>
                    <div className="box">
                        <span><i className="fa fa-phone-square" aria-hidden="true"></i></span>
                        <h4>Phone Number</h4>
                        <p>8826244873</p>
                        <p>8826244873</p>
                   
                   </div>
                   <div className="box">
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                    <h4>Address</h4>
                    <p>Info@Infiniteitsolutions.Net</p>
               </div>
               </div>
           </div> 
    </section>
    
    </>
  )
}

