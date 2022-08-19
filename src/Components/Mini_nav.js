import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mini_nav() {
    return (
        <div className="nav-container">
            <ul className="nav_ul">
                <Link to="about" style={{ textDecoration: 'none' }}><li className="li_About">About</li></Link>
                <Link to="skills" style={{ textDecoration: 'none' }}><li className="li_Skills">Skills</li></Link>
                <Link to="contact" style={{ textDecoration: 'none' }}><li className="li_Contact">Contact</li></Link>
            </ul>
        </div>
    );
  }
  
  export default Mini_nav;