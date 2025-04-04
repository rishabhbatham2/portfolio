import React from "react";

import './ProjectView.css'




export default function ProjectView(){


    const carddata = {description:`<p>Web App Name is an innovative web application designed to enhance productivity and streamline workflow management. It provides users with a simple yet powerful interface to manage tasks, collaborate in real-time, and track progress effortlessly. Whether you are an individual or part of a team, this app offers the flexibility and features needed to stay organized and efficient.</p>

<p>One of the key benefits of Web App Name is its ability to centralize all tasks and projects in one place. Users can create, edit, and assign tasks with ease, ensuring that every team member stays informed and accountable. With built-in notifications and deadline reminders, the app helps users keep track of important tasks and never miss a deadline.</p>

<p>Collaboration is at the heart of Web App Name. Team members can communicate, share files, and provide updates within the app, eliminating the need for scattered email threads or multiple messaging platforms. This seamless communication ensures that projects move forward smoothly without unnecessary delays or miscommunication.</p>

<p>Web App Name is designed with security and reliability in mind. Data is encrypted and stored securely, allowing users to focus on their work without worrying about privacy concerns. The app is built using modern web technologies, ensuring fast performance, scalability, and a seamless user experience across different devices.</p>

<p>Another key feature of Web App Name is its integration capabilities. It can connect with various third-party tools and services, allowing users to sync their data and automate workflows. This makes it an essential tool for businesses, freelancers, and professionals looking for an all-in-one solution to manage their tasks and projects.</p>

<p>With a focus on user experience, Web App Name is designed to be intuitive and easy to use. The clean interface ensures that even new users can quickly understand how to navigate and utilize the features effectively. Whether you need to manage daily tasks, complex projects, or team collaboration, this app provides the tools necessary to work smarter and achieve goals efficiently.</p>`}
   

    return(
        <div className="projectview__cont">

          

            <div className="projectview__scroll">

                <img src="/image-feed4.jpg"  />

            </div>

            <div className="projectview__header">
              Project Name this is project name
            </div>


            <div className="projectview__data">

                <div className="projectviewtext">
                   <div dangerouslySetInnerHTML={{__html:carddata.description}} ></div>
                </div>

                <div className="projectviewdetails">

                </div>

            </div>
             
        </div>
    )
}