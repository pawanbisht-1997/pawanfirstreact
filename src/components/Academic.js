import React from 'react';
export const Academic = () => {
    const academic_box=[
        {
           id: 1,
           img: `./Assets/img/1-12th.webp`,
           title: `A.D.C.A`,
           description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
           fee:1000,
           month: 1 +  `month`,
        },
        {
            id: 2,
            img: `./Assets/img/1-12th.webp`,
            title: `A.D.C.A`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
            fee:1000,
            month: 1 +  `month`,
         },
         {
            id: 3,
            img: `./Assets/img/1-12th.webp`,
            title: `A.D.C.A`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
            fee:1000,
            month: 1 +  `month`,
         },
         {
            id: 4,
            img: `./Assets/img/1-12th.webp`,
            title: `A.D.C.A`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aut eum repellat quod.`,
            fee:1000,
            month: 1 +  `month`,
         },
         
    ]
    return(
        <section className="academic-classes pt-top pt-bottom">
        <div className="container">
            <h2 className="text-center">Academic <span>classNamees</span></h2>
            <div className="flex spce-btwn">
                {
                     academic_box.map((acd)=>{
                        return  <div class="blog-wrap" key={acd.id}>
                    <div class="img-part">
                        <img src={acd.img} alt="academci" class="img-fluid"/>
                    </div>
                    <div class="content-part">
                        <h4 class="title">{acd.title}</h4>
                        <div class="blog-meta">
                            <div class="user-data">
                                <p>{acd.description}</p>
                            </div>
                            <div class="flex spce-btwn">
                                <div class="fee">
                                    <span><i class="fa fa-inr" aria-hidden="true"></i>{acd.fee}</span>
                                </div>
                                <div class="month">
                                    <span><i class="fa fa-inr" aria-hidden="true"></i>{acd.month}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                     })   
              
                }
            </div>
        </div>
    </section>
    )
}