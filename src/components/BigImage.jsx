import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const BigImage = ({ imageSrc, size, settings }) => {

    const [zoom, setZoom] = useState(100)

    useEffect(() => {
        //zoom if size of the pic il largeur than the window
        if(size.width > window.innerWidth) {
            setZoom(window.innerWidth / size.width * 100 - 3)
        } else {
            setZoom(100)
        }
    })

    return (
        <div className='bigImage'>
            <img 
                src={imageSrc} 
                alt="image upload" 
                style={{
                    width : size.width,
                    height: size.height,
                    objectPosition: `${size.posX}% ${size.posY}%`,
                    zoom: `${zoom}%`,

                    filter: `hue-rotate(${settings.color}deg) brightness(${settings.brightness}%) saturate(${settings.saturate}%) contrast(${settings.contrast}%)`
                    
                }}/>
        </div>
    );
};

export default BigImage;