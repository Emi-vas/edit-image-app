import React from 'react';
import { useState } from 'react';
import Buttons from './components/settings/Buttons';
import Previsu from './components/Previsu'
import { useEffect } from 'react';
import BigImage from './components/BigImage';
import Settings from './components/settings/Settings';
import Filter from './components/settings/Filter';
import Size from './components/settings/Size';

const App = () => {

  // select the type of setting. (setting by buttons)
  const [mode, setMode] = useState("réglages")

  //image import by user
  const [imageSrc, setImageSrc] = useState("")

  const [size, setSize] = useState({width : 0, height : 0, posX: 50, posY: 50})


  return (
    <div>
      <h1>Retouche Image</h1>

      <div className='main-cont'>
          <section className='main'>
              <div className='main__elem'>
                  <Buttons mode={mode} setMode={setMode} />
                  {mode == "réglages" && <Settings />}
                  {mode == "filtres" && <Filter />}
                  {mode == "taille" && <Size size={size} setSize={setSize} />}
              </div>

              <div className='main__elem'>
                  <Previsu imageSrc={imageSrc} setImageSrc={setImageSrc} setSize={setSize} size={size} />
              </div>
          </section>
      </div>

      {
        imageSrc && <BigImage imageSrc={imageSrc} size={size} />
      }
    </div>
  );
};

export default App;