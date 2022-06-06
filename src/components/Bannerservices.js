import React from 'react';
export const Bannerservices = () => {
  return (
    <section className="banner-services">
    <div className="container">
        <div className="flex">
            <div className="box">
                 <div className="box-content">
                    <i className="fa fa-wifi" aria-hidden="true"></i>
                    <h3>Free Wifi</h3>
                 </div>
            </div>
            <div className="box">
                <div className="box-content">
                    <i className="fa fa-tint" aria-hidden="true"></i>
                   <h3>Water Facilities</h3>
                </div>
           </div>
           <div className="box">
            <div className="box-content">
                <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
               <h3>Affordable Fees</h3>
            </div>
       </div>
        </div>
    </div>


</section>
    
  )
}

