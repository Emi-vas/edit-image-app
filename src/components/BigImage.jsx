import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const BigImage = ({ imageSrc, size, settings, filter}) => {

    const [zoom, setZoom] = useState(100)
    
    const negativeValue = () => {
        if(filter.negative) {
            return 1
        } else {
            return 0
        }
    }

    useEffect(() => {
        //zoom if size of the pic il largeur than the window
        if(size.width > window.innerWidth) {
            setZoom(window.innerWidth / size.width * 100 - 3)
        } else {
            setZoom(100)
        }
    })

    return (
        <div className='bigImage' >
            <img  id='big-image'
                src={imageSrc} 
                alt="image upload" 
                style={{
                    width : size.width,
                    height: size.height,
                    objectPosition: `${size.posX}% ${size.posY}%`,
                    zoom: `${zoom}%`,

                    filter: `blur(${filter.blur}px) invert(${negativeValue()}) sepia(${filter.sepia}%) hue-rotate(${settings.color}deg) brightness(${settings.brightness}%) saturate(${settings.saturate}%) contrast(${settings.contrast}%)`,
                    transform: filter.mirror ? "scaleX(-1)" : "scaleX(1)", //-1  + arondir + sepia + blur 
                    borderRadius: `${filter.border}%`
                }}/>
        </div>
    );
};

export default BigImage;