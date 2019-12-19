import React, { Component } from 'react'
import "./test.scss"
import "./test.css"
import FISH_LOGO from "../../images/fish.png";
import LINKEDIN_LOGO from "../../images/linkedin.svg";
import GITHUB_LOGO from "../../images/github.svg";

export default class Test extends Component {
    render() {
        return (
           <div>
            <div className="dababy">
            <aside class="profile-card ">
            
                <header>
                
                    
                    
                <a href="https://www.linkedin.com/in/johnnnyn/">
            <img src={FISH_LOGO} alt=""/>
        </a>
                    
                    
                    
                    <h1>David Jones</h1>
                    
                    
                    <h2>Web Developer</h2>
                
                </header>
            
                
                {/* <div class="profile-bio">
                
                    <p>Even when everything is perfect, you can always make it better. Break barriers in your head, create something crazy and don't forget Code is Poetry...</p>
                
                </div> */}
            
               
                <ul class="profile-social-links">
                    
                    
                    <li>
                        <a href="https://www.facebook.com/v1ctory">
                            <img src={LINKEDIN_LOGO } alt=""/>
                            {/* <svg viewBox=" 0 0 100 100"></svg> */}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/v1ctory">
                            <img src={GITHUB_LOGO } alt=""/>
                            {/* <svg viewBox=" 0 0 100 100"></svg> */}
                        </a>
                    </li>
                    
                    
                   
                    
                    
                
                </ul>
            
            </aside>
            </div>
            </div>
            
        )
    }
}