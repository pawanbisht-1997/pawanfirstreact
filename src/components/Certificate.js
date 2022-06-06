import React from 'react';
export const Certificate = () => {
    const card_box = [
        {
            id: 2,
            image: `./Assets/img/course-one.jpg`,
            title: `Basic`,
            title2: `Basic`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 2,
            image: `./Assets/img/course-one.jpg`,
            title: `DTP`,
            title2: `DTP`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 3,
            image: `./Assets/img/course-one.jpg`,
            title: `Busy`,
            title2: `Busy`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 4,
            image: `./Assets/img/course-one.jpg`,
            title: `internet`,
            title2: `internet`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 5,
            image: `./Assets/img/course-one.jpg`,
            title: `Telly ERP 9`,
            title2: `Telly ERP 9`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 5,
            image: `./Assets/img/course-one.jpg`,
            title: `Advance Excel`,
            title2: `Advance Excel`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 6,
            image: `./Assets/img/course-one.jpg`,
            title: `C, C++, JAVA`,
            title2: `AC, C++, JAVA`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 7,
            image: `./Assets/img/course-one.jpg`,
            title: `Web designing`,
            title2: `Web designing`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },
        {
            id: 7,
            image: `./Assets/img/course-one.jpg`,
            title: `2D, 3D Animation`,
            title2: `2D, 3D Animation`,
            description: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod`,
        },

      
    ]

    return (
        <section className="certificate-courses pt-bottom">
            <div className="container">
                <h2 className="text-center">Certificate <span>Courses</span></h2>
                <div className="flex spce-btwn align-center">
                    {
                        card_box.map((curEle) => {
                            return <div className="box" key={curEle.id}>
                                <div className="degree-wrap">
                                    <img src={curEle.image} alt="" />
                                    <div className="title-part">
                                        <h4 className="title">{curEle.title}</h4>
                                    </div>
                                    <div className="content-part">
                                        <h4 className="title"><a href="#">{curEle.title2}</a></h4>
                                        <p className="desc">{curEle.description}</p>

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



