import React from 'react';


export const Services = () => {
   const card_box = [
      {
         id: "service-one",
         image: "./Assets/icons/wifi.png",
         title: "Free Wifi"
      },
      {
         id: "service-two",
         image: "./Assets/icons/money.png",
         title: "Affordable fees"
      },
      {
         id: "service-three",
         image: "./Assets/icons/water-bottle.png",
         title: "Water facilities"
      },
      {
         id: "service-four",
         image: "./Assets/icons/washroom.png",
         title: "Neat & Clean Washrooms"
      },
      {
         id: "service-five",
         image: "./Assets/icons/fan.png",
         title: "Well Maintained Airy Rooms"
      },
      {
         id: "service-six",
         image: "./Assets/icons/work-table.png",
         title: "Comfortable Sitting"
      },
      {
         id: "service-seven",
         image: "./Assets/icons/newspaper.png",
         title: "Magazines & Newspaper"
      },
      {
         id: 8,
         image: "./Assets/icons/books.png",
         title: "Books Are Available"
      },

   ]


   return (
      <div className="services  pt-bottom">
         <div className="container">
            <h2>Our <span>Services</span></h2>
            <div className="flex">

               {card_box.map((current) => {
                  return <div className="box" key={current.id}>
                     <div className="box-content">
                        <img src={current.image} alt="wifi" />
                        <h4>{current.title}</h4>
                     </div>
                  </div>
               })}
            
            </div>
         </div>
      </div>

   )
}

