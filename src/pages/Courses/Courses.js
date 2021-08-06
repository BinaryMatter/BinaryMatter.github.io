import React from 'react'

import CLogo from "../../img/CLogo.png";

import './Courses.scss';

function Courses() {
    return (
        <>
            <div className="coursesList__">
                <h1 className="coursesList__title">Courses</h1>
                
                <div className="coursesList__logoLink">
                    <a href="#/courses/C-programming">
                        <img className="coursesList__logoImg" src={CLogo} alt="C Logo" />
                        <h2>C programming</h2>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Courses
