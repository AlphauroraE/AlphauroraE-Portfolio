import React from 'react';
import './Polaroid.css';

const Polaroid = ({ imageSrc, label, stickers }) => {
    return (
        <div className="polaroid">
            <img src={imageSrc} alt="StoryBookAI Image" className="image" />
            <div className="label">{label}</div>
            <div className="stickers">
                {stickers.map((src, index) => (
                    <img key={index} src={src} alt="Sticker" className="sticker" />
                ))}
            </div>
        </div>
    );
};

export default Polaroid;