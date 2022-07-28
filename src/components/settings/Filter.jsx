import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div className='settings'>
            <h2>Filtre</h2>
            <div className='settings--filter'>
                <div className='bloc1'>
                    <label>Effet miroire</label>
                    <div 
                        onClick={() => setFilter({...filter, mirror: !filter.mirror})} 
                        className={filter.mirror ? "checkbox checkbox--active" : "checkbox"}>
                        <div className='elem'>
                            <div className='rec'></div>
                            <div className='circle'></div>
                        </div>
                    </div>
                </div>
                <div className='bloc1'>
                    <label>Négatif</label>
                    <div 
                        onClick={() => setFilter({...filter, negative: !filter.negative})} 
                        className={filter.negative ? "checkbox checkbox--active" : "checkbox"}>
                        <div className='elem'>
                            <div className='rec'></div>
                            <div className='circle'></div>
                        </div>
                    </div>
                </div>

                <div className='blocBigInput'>
                    <label >Effet vieilli : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, sepia: parseInt(e.target.value)})} 
                        type="range" 
                        min={0} max={100} 
                        value={filter.sepia} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, sepia: 0})}></i>
                </div>

                <div className='blocBigInput'>
                    <label >Arrondi : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, border: parseInt(e.target.value)})} 
                        type="range" 
                        min={0} max={50} 
                        value={filter.border} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, border: 0})}></i>
                </div>

                <div className='blocBigInput'>
                    <label >Flou : </label>
                    <input 
                        onChange={(e) => setFilter({...filter, blur: parseInt(e.target.value)})} 
                        type="range" 
                        min={0} max={10} 
                        value={filter.blur} />
                    <i className="fa-solid fa-arrows-rotate" onClick={()=> setFilter({...filter, blur: 0})}></i>
                </div>
            </div>
        </div>
    );
};

export default Filter;