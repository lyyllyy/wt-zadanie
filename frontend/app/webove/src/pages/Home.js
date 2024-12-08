import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <main>
        
        <header>
        <div className="header-container" id="home">
          <h1>Discover the world on wheels</h1>
          <form action="/">
            <div className="input-group">
              <label htmlFor="picklocation">Pick-up Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Search a location"
              />
            </div>
            <div className="input-group">
              <label htmlFor="pick-date">Pick-up Date</label>
              <input
                type="text"
                name="pick-date"
                id="pick-date"
                placeholder="11/11/2024"
              />
            </div>
            <div className="input-group">
              <label htmlFor="drop-location">Drop-Off Location</label>
              <input
                type="text"
                name="drop-location"
                id="drop-location"
                placeholder="Search a location"
              />
            </div>
            <div className="input-group">
              <label htmlFor="drop-date">Drop-Off Date</label>
              <input
                type="text"
                name="drop-date"
                id="drop-date"
                placeholder="11/11/2024"
              />
            </div>
            <button className="btn" onClick={(e) => e.preventDefault()}>
              <i className="ri-search-line"></i>
            </button>
            
          </form>
          <img src="icons/image 23 (1).png" alt="header" />
        </div>
        </header>
        <section className="services" id="services">
          <div className="heading">
            <h1>Our impressive Collection of Cars</h1>
          </div>
          <div className="services-container">
            {[
              { year: "2019", name: "Porsche Panamera", price: 80, image: "car1.png" },
              { year: "2022", name: "Ford Expedition", price: 80, image: "car2.png" },
              { year: "2022", name: "BMW M4", price: 80, image: "car3.png" },
              { year: "2015", name: "Audi A4 B7", price: 47, image: "car4.png" },
              { year: "2017", name: "McLaren 720S", price: 92, image: "car5.png" },
              { year: "2015", name: "BMW M4 F82", price: 63, image: "car6.png" },
            ].map((car, index) => (
              <div className="box" key={index}>
                <div className="box-img">
                  <img src={`icons/${car.image}`} alt={car.name} />
                </div>
                <p>{car.year}</p>
                <h3>{car.name}</h3>
                <h2>
                  ${car.price} <span>/day</span>
                </h2>
                <a href="#" className="btn">
                  Rent Now
                </a>
              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default Home;
