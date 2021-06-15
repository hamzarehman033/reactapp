import { Component } from "react";
import { Link} from 'react-router-dom';

class NavbarHeader extends Component {
  render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item">
             <Link to="/Profile"><a className="nav-link"  href="/Profile">Profile</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/Contact"><a className="nav-link"  href="/Contact">Contact</a></Link>
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }
}

export default NavbarHeader;
