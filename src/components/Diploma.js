import React from 'react';
export const Diploma = () => {
    const Diploma_box =[
        {
           id: 1,
           img: `./Assets/icons/ADCA.png`,
           title: `A.D.C.A`,
           description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
        },
        {
            id: 2,
            img: `./Assets/icons/ADCA.png`,
            title: `A.D.C.A`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
         },
         {
            id: 2,
            img: `./Assets/icons/ADCA.png`,
            title: `A.D.C.A`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
         },
    ]
    return(
        <section className="diploma-courses">
        <div className="flex">
            <div className="dibploma-box-img">
                <img src="./Assets/img/diploma-course.jpg" alt="diploma-course" className="img-fluid h-100"/>
            </div>
            <div className="debloma-course-content">
                <h2 className="text-center">Certificate <span>Courses</span></h2>
              {
                Diploma_box.map((acd)=>{
                   return <div className="box flex spce-btwn" key={acd.id} >
                    <div className="left"> 
                        <img src={acd.img} class="img-fluid" alt=""/>
                    </div>
                    <div className="right">
                        <h3>{acd.title}</h3>
                        <p>{acd.description}</p>
                    </div>
                </div>
                })
              }
                
            </div>
        </div>
    </section>
    )
}