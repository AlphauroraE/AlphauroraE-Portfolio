import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import profile from '../assets/photo.jpg';

const Home = () => {
    return (
        <div>
            <div
                className="banner"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/sunset.jpeg'})`,
                }}
            >
                <h1>Hi! I'm           </h1>
                <h1 className="fancy">Joanne</h1>
            </div >
            <div className="content-container">
                <div className="about-me">
                    Hello! I'm Joanne, a software engineer with a passion for creating innovative solutions. I love coding, photography, and exploring new technologies. Welcome to my portfolio!
                </div>
                <div className="photo">
                    <img src={profile} alt="Joanne's Profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;