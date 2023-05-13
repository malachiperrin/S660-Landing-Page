import "./Header.css";

export default function Header(props) {

    return(
    
      <header className="site-header is-flex is-justify-content-space-between p-3">
        <div className="is-flex is-align-items-center">
         <img className="m-3 image is-128x128 site-logo" src={ props.siteLogo } alt="S660 Logo" />
          <img className="m-3 image is-128x128 site-logo" src={ props.hondaLogo } alt="Honda Logo" />
        </div>
    
          <ul className="is-flex is-align-items-center">
            <li className="m-2">Link</li>
            <li className="m-2">LInk</li>
            <li className="m-2">Link</li>
            <li className="m-2">Link</li>        
          </ul> 
      </header>    
  )
    
}