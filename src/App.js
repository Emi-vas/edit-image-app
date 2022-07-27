import React from 'react';
import { useState } from 'react';
import Buttons from './components/settings/Buttons';

const App = () => {

  // select the type of setting. (setting by buttons)
  const [mode, setMode] = useState("réglage")


  return (
    <div>
      <h1>Retouche Image</h1>

      <div className='main-cont'>
          <section className='main'>
              <div className='main__elem'>
                  <Buttons mode={mode} setMode={setMode} />

              </div>

              <div className='main__elem'>

              </div>
          </section>
      </div>
    </div>
  );
};

export default App;