import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Projects.css';
import Polaroid from './Polaroid';
import example from '../assets/photo.jpg';

const Projects = () => {
    const stickers = [
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    ];

    return (
        <div className="project-page">
            <div style={{ padding: '20px' }}>
                <Polaroid
                    imageSrc={example}
                    label="StoryBookAI"
                    stickers={stickers}
                />
            </div>
        </div>
    );
};

export default Projects;