import React from "react"

export default function Info () {
    return (
        <div className="container">
            <img className="headshot" src="./img/julie-morris.png" />
            <div className="text-area">
                <h1 className="name">Julie Morris</h1>
                <h3 className="title">Front End Developer</h3>
                <h4 className="portfolio"><a href="https://julie805.github.io/portfolio/<h4>JulieMorris.portfolio">JulieMorris.Portfolio</a></h4>
                <div className="button-area">
                    <a href="mailto: seejulielee@gmail.com" className="email-btn"><img src="./img/icon.png" />Email</a>
                    <a href="https://www.linkedin.com/in/julie-morris-85374911/"className="linkedin-btn"><img src="./img/vector.png"/>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}