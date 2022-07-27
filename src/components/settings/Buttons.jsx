import React from 'react';

const Buttons = ({ mode, setMode }) => {
    const buttons = ["réglage", "taille", "filtre"]

    return (
        <div className='buttons'>
            {
                buttons.map((button) => (
                    <button 
                        className={mode == button ? "active" : ""}
                        onClick={() => setMode(button)}
                        >{button}</button>
                ))
            }
            
        </div>
    );
};

export default Buttons;