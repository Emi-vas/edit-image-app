import React from 'react';

const Settings = ({settings, setSettings}) => {
    return (
        <div className='settings'>
            <h2>Settings</h2>
            <div className='settings--settings'>
                <div className='blocBigInput'>
                    <label >Luminosité : </label>
                    <input 
                        onChange={(e) => setSettings({...settings, brightness: parseInt(e.target.value)})} 
                        type="range" 
                        min={30} max={200} 
                        value={settings.brightness} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setSettings({...settings, brightness: 100})}></i>
                </div>
                <div className='blocBigInput'>
                    <label >Contraste : </label>
                    <input 
                        onChange={(e) => setSettings({...settings, contrast: parseInt(e.target.value)})} 
                        type="range" 
                        min={30} max={400} 
                        value={settings.contrast} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setSettings({...settings, contrast: 100})}></i>
                </div>
                <div className='blocBigInput'>
                    <label >Saturation : </label>
                    <input 
                        onChange={(e) => setSettings({...settings, saturate: parseInt(e.target.value)})} 
                        type="range" 
                        min={0} max={400} 
                        value={settings.saturate} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setSettings({...settings, saturate: 100})}></i>
                </div>
                <div className='blocBigInput'>
                    <label >Couleur : </label>
                    <input 
                        onChange={(e) => setSettings({...settings, color: parseInt(e.target.value)})} 
                        type="range" 
                        min={0} max={180} 
                        value={settings.color} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setSettings({...settings, color: 0})}></i>
                </div>
            </div>
        </div>
    );
};

export default Settings;