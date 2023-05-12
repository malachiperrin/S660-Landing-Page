import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header is-flex is-justify-content-space-between p-3">
         <span className="site-logo">boxing</span>

          <ul className="is-flex">
            <li>Link</li>
            <li>LInk</li>
            <li>Link</li>
            <li>Link</li>        
          </ul> 
      </header>

    <section className="hero is-large is-primary" id="hero">
        <div class="hero-body">
          <h1 class="title title-make is-bold">Honda</h1>
          <h2 class="subtitle title-model">S660</h2>
          <div>
            <button className="button m-2">Watch Film</button>
            <button className="button m-2">See Trims</button>
          </div>
        </div>

        <div className="p-2 car-details is-flex is-align-items-center is-justify-content-space-evenly">

          <div>
            <span className="is-flex flex-direction-column is-align-items-center">Car Manufactuer</span>
            <span>HONDA</span>
          </div>

           <div>
            <span className="is-flex flex-direction-column is-align-items-center">Car Production</span>
            <span>2016 - Present</span>
          </div>

           <div>
            <span className="is-flex flex-direction-column is-align-items-center">Engine</span>
            <span>1.6 Liter V-TEC</span>
          </div>

          <span>Stay up to date!</span>
          <form>
            <input placeholder="email" />
            <button>Sign up</button>
          </form>


              
        </div>
    </section>


    <section className="p-3 has-text-dark is-flex is-align-items-center is-justify-content-space-evenly" id="engine-specs">
      <div>
        <span>3.1 S</span>
        <p>0 - 60 MPH</p>
      </div>

      <div>
        <span>4 Cyl</span>
        <p>26 miles per gallon</p>
      </div>


       <div>
        <span>AWD</span>
        <p>Dual Motor</p>
      </div>

      <div>
        <button className="Button">Order Now</button>
      </div>      
    </section>


    <section className=" is-flex is-align-items-center is-justify-content-space-evenly">
      <div>
        <img src="https://placehold.co/600x400" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <p>Morbi sit amet maximus justo, sit amet condimentum felis. Aliquam sit amet iaculis lacus. Fusce at hendrerit ante, fermentum pretium augue. Nunc sodales viverra lorem eget volutpat. In aliquam massa quis ex volutpat, eu eleifend tellus placerat.</p>
      </div>

       <div>
        <img src="https://placehold.co/600x400" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <p>Morbi sit amet maximus justo, sit amet condimentum felis. Aliquam sit amet iaculis lacus. Fusce at hendrerit ante, fermentum pretium augue. Nunc sodales viverra lorem eget volutpat. In aliquam massa quis ex volutpat, eu eleifend tellus placerat.</p>
      </div>


       <div>
        <img src="https://placehold.co/600x400" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <p>Morbi sit amet maximus justo, sit amet condimentum felis. Aliquam sit amet iaculis lacus. Fusce at hendrerit ante, fermentum pretium augue. Nunc sodales viverra lorem eget volutpat. In aliquam massa quis ex volutpat, eu eleifend tellus placerat.</p>
      </div>

  
    </section>
    
    
    </div>
  );
}

export default App;
