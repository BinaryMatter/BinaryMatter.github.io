import React from 'react'
import C_programming_img from "../../img/C_programming.png";

import './C_programming.scss';

function C_programming() {
    return (
        <>
            <div className="courses__">
                <h1 className="courses__title">C Programming Course 2021 July</h1>

                <div className="courses_link">
                    <a href="#courses">
                        <img className="courses__img" src={C_programming_img} alt="C programming" />
                    </a>
                </div>

                <div className="courses__description">
                    <p>courses__description</p>
                </div>
            </div>
        </>
    )
}

export default C_programming
