import React from 'react';
import "./Card.css";

export default function Card() {

  return(
    <React.Fragment>
      <div className="has-text-centered is-flex is-flex-direction-column is-align-items-center">
        <img className="m-2 test-image" src="https://placehold.co/600x400" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <p>Morbi sit amet maximus justo, sit amet condimentum felis. Aliquam sit amet iaculis lacus. Fusce at hendrerit ante, fermentum pretium augue. Nunc sodales viverra lorem eget volutpat. In aliquam massa quis ex volutpat, eu eleifend tellus placerat.</p>
      </div>
    </React.Fragment>
  );
}