import React from 'react';

const Buttons = ({ mode, setMode }) => {
    const buttons = ["réglages", "taille", "filtres"]

    return (
        <div className='buttons'>
            {
                buttons.map((button) => (
                    <button 
                        className={mode == button ? "active" : ""}
                        onClick={() => setMode(button)}
                        key={button}
                        >{button}</button>
                ))
            }
            
        </div>
    );
};

export default Buttons;