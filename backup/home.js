import gsap, { TweenMax } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { banner } from "../../helpers/home";

import "animate.css";
import './home.scss';



export const HomeScreen = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        
        banner();

        TweenMax.to(".orange p", {
            scrollTrigger: ".orange", 
            duration: 2,
            repeat: 2,
            rotation: 360
          });
          
          TweenMax.to(".red", {
            scrollTrigger: {
              trigger: ".red",
              toggleActions: "restart pause reverse pause",
              duration: 3, 
            }, 
            duration: 1, 
            backgroundColor: "#FFA500", 
            ease: "none"
          });
          
    }, [])
    return (
        <div style={{ height:4000 }}>
            {/* <section className="pSection">
                <div className="container">
                    <div className="pContent col-4">
                        Participa
                    </div>

                    <div className="pContent1 col-6 col-md-2">
                        Diviértete y Aprende!
                    </div>
                </div>
                
                <img  className="pImage" src="./assets/home/01.jpg" alt="banner"/>
            </section> */}

            <div style={{ height:800 }}></div>
            <section className="panel blue">
                <h1>Basic Tweening</h1>
            </section>

            <section className="panel orange">
                <p>This element will spin.</p>
            </section>

            <section className="panel red">
                <p>This background color will change</p>
            </section>

            {/* <div className="box" style={{ width:100, height:100, backgroundColor:'red' }} ></div> */}
        </div>
    )
}
