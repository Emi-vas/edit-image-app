import React from 'react';
import { useState } from 'react';

const Size = ({ size, setSize }) => {

    return (
        <div className='settings settings--size'>
            <h2>Réglage de la dimension (en pixels)</h2>
            <div className='first_bloc'>
                <div>
                    <label htmlFor="width">Largeur</label>
                    <input  
                        type="text" 
                        className='textInput' id='width' 
                        value={size.width} 
                        onChange={(e) => setSize({...size, width : parseInt(e.target.value), height : size.height})}
                     />
                </div>
                <div>
                    <label htmlFor="height">Hauteur</label>
                    <input 
                        type="text" 
                        className='textInput' 
                        id='height' 
                        value={size.height} 
                        onChange={(e) => setSize({...size, height : parseInt(e.target.value), width : size.width})}/>
                </div>
            </div>
            <h2>Position de l'image</h2>
            <div className='second_bloc'>
                <input onChange={(e) => setSize({...size, posX : e.target.value})} type="range" defaultValue={50} min={0} max={100} />
                <input onChange={(e) => setSize({...size, posY : e.target.value})} className='vertical' type="range" defaultValue={50} min={0} max={100}/>
            </div>
        </div>
    );
};

export default Size;