import React from "react";
import { useState } from "react";
import './ProjectTab.css'





export default function ProjectsTab(){

    const items = [{"image":'/image1.jpg',"title":"this project","date":"21 May"},
        {"image":'/image1.jpg',"title":"this project","date":"21 May"},
        {"image":'/image1.jpg',"title":"this project","date":"21 May"},
        {"image":'/image1.jpg',"title":"this project","date":"21 May"},
        {"image":'/image1.jpg',"title":"this project","date":"21 May"},
        {"image":'/image1.jpg',"title":"this project","date":"21 May"},
    ]


    return(
        <div className="projectstab__cont">
            <div className="projectstab__heading">
              Here's Curated list of our projects
            </div>

            <div className="projecttab__tabs">

                {items.map((item)=>{

                    return(
                        <div className="projectstab__item">
                         
                           <img src={item.image} />
                           <div className="imagedata">
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                           </div>

                        </div>
                    )
                })}

            </div>


        </div>
    )
}