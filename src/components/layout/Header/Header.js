import "./Header.css";

export default function Header(props) {

    return(
    
      <header className="site-header is-flex is-justify-content-space-between p-3">
        <div className="is-flex is-align-items-center">
         <img className="m-3 image site-logo" src={ props.siteLogo } alt="S660 Logo" />
          <img className="m-3 image site-logo" src={ props.hondaLogo } alt="Honda Logo" />
        </div>
    
          <ul className="is-flex is-align-items-center">
            <li className="m-2">+1 (800)-341-4873</li>
            <li className="m-2">Shop</li>
            <li className="m-2">Sign Up</li>        
          </ul> 
      </header>    
  )
    
}
