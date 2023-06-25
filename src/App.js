import './App.css';

// images & logos
import siteLogo from "./s660.jpg";
import hondaLogo from "./honda.jpg";

// Components
import Header from "./components/layout/Header/Header.js";
import Footer from "./components/layout/Footer/Footer.js";
import Card from "./components/ui/Card/Card.js";
import BusinessHoursContainer from "./components/ui/BusinessHours/BusinessHoursContainer/BusinessHoursContainer.js";

// Images 
import fuelGaugeImage from "./fuelgauge.png";
import zeroTo60Image from "./0to60.png";
import rearDriveImage from "./reardrive.jpg";
import greens660 from "./greens660.jpg";

function App() {
  return (
    <div className="App">


      <Header hondaLogo={hondaLogo} siteLogo={siteLogo} />

      <section className="hero is-large is-primary" id="hero">
        <div className="hero-body">
          <h1 className="title title-make has-text-weight-bold">Honda</h1>
          <h2 className="subtitle title-model">S660</h2>
          <div>
            <button className="button m-2">Watch Film</button>
            <button className="button m-2">See Trims</button>
          </div>
        </div>

        <div className="p-2 car-details is-flex is-align-items-center is-justify-content-space-evenly">

          <div className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
            <span>Car Manufactuer</span>
            <span>HONDA</span>
          </div>

           <div  className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
            <span>Car Production</span>
            <span>2016 - Present</span>
          </div>

           <div  className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
            <span>Engine</span>
            <span>1.6 Liter V-TEC</span>
          </div>

          <span>Stay up to date!</span>
          <form className="is-flex is-align-items-center">
            <input className="input" placeholder="email" />
            <button className="button is-info m-2">Sign up</button>
          </form>
    
        </div>
      </section>


    <section className="p-3 has-text-dark is-flex is-align-items-center is-justify-content-space-evenly" id="engine-specs">
      <div  className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
		<img className="image is-64x64" src={ zeroTo60Image } alt="0 to 60 gauge" />
        <span>3.1 S</span>
        <p>0 - 60 MPH</p>
      </div>

      <div  className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
		<img className="image is-64x64" src={ fuelGaugeImage } alt="Fuel gauge" /> 
        <span>4 Cyl</span>
        <p>26 miles per gallon</p>
      </div>


       <div  className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
		<img className="image is-64x64" src={ rearDriveImage }  alt="rear drive icon" />
        <span>AWD</span>
        <p>Dual Motor</p>
      </div>

      <div>
        <button className="button is-info">Order Now</button>
      </div>      
    </section>


    <section className="p-5 is-flex is-align-content-center is-justify-content-space-evenly">

      <Card cardImage={greens660} />

      <Card cardImage={greens660} />

      <Card cardImage={greens660} />    
  
    </section>
    

    <section className="m-5 is-flex is-align-items-center is-justify-content-center" style={{height: "400px"}}>

    <div className="is-flex is-align-content-center is-justify-content-space-evenly" style={{height: "100%", width: "100%"}}>
      <div>
        <h3 className="title has-text-weight-bold">All-New</h3>
        <h4 className="title has-text-weight-bold">Honda S660</h4>
		
		<p>
			Honda is in the business of moving you in every sense of the word. We create intelligent technologies that enrich lives and make the world more fun to move around in — on the road, on the water, in the air and beyond. Our driving inspiration will always be to enhance the joy and freedom of mobility for all.
		</p>
      </div>
      
      <img className="is-align-self-center" style={{maxHeight: "100%", maxWidth: "100%"}} src="https://www.carscoops.com/wp-content/uploads/2018/05/Honda-S660-Modulo-X-32-1024x358.png" alt="660" />
    </div>

    </section>


    <article className="four-corners">

      <div  className="has-text-light" style={{"background": `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), center / cover no-repeat url(${greens660})` }}>
        <span className="m-1" style={{"fontSize": "36px"}}>Mobility</span>
        <div>
          <p>Honda is in the business of moving you in every sense of the word. We create intelligent technologies that enrich lives and make the world more fun to move around in — on the road, on the water, in the air and beyond. Our driving inspiration will always be to enhance the joy and freedom of mobility for all.</p>
          <button className="button">Learn More</button>
        </div>
      </div>

      <div className="has-text-light" style={{"background": `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), center / cover no-repeat url(${greens660})` }}> 
        <span>Mobility</span>
        <div>
          <p>Honda is in the business of moving you in every sense of the word. We create intelligent technologies that enrich lives and make the world more fun to move around in — on the road, on the water, in the air and beyond. Our driving inspiration will always be to enhance the joy and freedom of mobility for all.</p>
          <button className="button">Learn More</button>
        </div>
      </div>
    
      <div className="has-text-light" style={{"background": `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), center / cover no-repeat url(${greens660})` }}>
        <span>Mobility</span>
        <div>
          <p>Honda is in the business of moving you in every sense of the word. We create intelligent technologies that enrich lives and make the world more fun to move around in — on the road, on the water, in the air and beyond. Our driving inspiration will always be to enhance the joy and freedom of mobility for all.</p>
          <button className="button">Learn More</button>
        </div>
      </div>


      <div className="has-text-light" style={{"background": `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), center / cover no-repeat url(${greens660})` }}>
        <span>Mobility</span>
        <div>
          <p>Honda is in the business of moving you in every sense of the word. We create intelligent technologies that enrich lives and make the world more fun to move around in — on the road, on the water, in the air and beyond. Our driving inspiration will always be to enhance the joy and freedom of mobility for all.</p>
          <button className="button">Learn More</button>
        </div>
      </div>

    
    </article>
    

    <section id="contact-sales">
      
      <BusinessHoursContainer />

      <img src="https://www.carbodydesign.com/media/2013/10/Honda-S660-Concept-Interior-Design-Sketch-01.jpg" alt="S660 Interior" />
      
    </section>



    
    <Footer />
  
    
    </div>
  );
}

export default App;
