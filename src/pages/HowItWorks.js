import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState } from 'react';


function HowItWorks() {
  
  const [imageIndex, setImageIndex] = useState(0);

  //  prepínanie obrázka medzi pôvodným a novym
  const toggleImage = () => {
    setImageIndex(imageIndex === 0 ? 1 : 0);
  };

  // zmena obrázka pri hoverovaní
  const hoverChangeImage = () => {
    setImageIndex(1); 
  };

  
  const resetImage = () => {
    setImageIndex(0); 
  };

  
  const images = [
    'icons/car_zmena.png',    
    'icons/car_zmena_1.png'   
  ];

  return (
    <div>
   
   <div className="howto_background">
        <div className="container">
          <section className="main-howto">
            <div className="row nadpis_contact-howto">
              <div className="col-md-auto text-center">
                <div className="heading">
                  <h1>How it works?</h1>
                </div>
                <p className="text-gray">
                  In this section, the tasks for the section "change section" are developed.
                </p>
              </div>
            </div>

            <div className="row howto_main main-scrol">
              <div className="col-lg-9 howto_main1">
                <div className="row">
                  <div className="col-12 col-md-5 howto_main2">
                    <div className="bubble" id="bubble1">
                      <div>
                        <h3 className="mb-1">1st Method</h3>
                        <p>Press the button to change the image</p>
                      </div>
                      <div>
                        {/* Tlačidlo pre prepnutie obrázka */}
                        <button className="btn btn-primary mt-2" onClick={toggleImage}>Zmena</button>
                      </div>
                    </div>

                    <div className="bubble" id="bubble2">
                      <div>
                        <h3 className="mb-1">2nd Method</h3>
                        <label htmlFor="imageSlider" className="mt-2">Swipe to change</label>
                      </div>
                      <div>
                        {/* Slider pre manuálnu zmenu obrázka */}
                        <input type="range"id="imageSlider" min="0" max="1"step="1"onInput={(e) => setImageIndex(Number(e.target.value))} className="mt-2"/>
                      </div>
                    </div>

                    <div className="bubble" id="bubble3"onMouseEnter={hoverChangeImage} onMouseLeave={resetImage}>
                      <div>
                        <h3 className="mb-1">3rd Method</h3>
                        <p>Go over the bubble</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-7 d-flex justify-content-center">
                    {/* Obrázok sa dynamicky mení  */}
                    <div className="bg-light rounded-3 p-3">
                      <img src={images[imageIndex]} alt="Auto" id="carImage" className="float-end" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
