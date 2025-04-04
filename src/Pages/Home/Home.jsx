import React from "react";
import './Home.css'
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsTab from "../../components/ProjectsTab/Projectstab";
import ServicesList from "../../components/Stats/Stats";
import ImageFeed from "../../components/ImageFeed/ImageFeed";




export default function Home(){


    return(
        <div className="home__cont">

            <HeroSection/>
            <ProjectsTab/>
            <ServicesList/>
            <ImageFeed/>

            
       

        </div>
    )
}