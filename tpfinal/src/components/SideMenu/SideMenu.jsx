import './SideMenu.scss';
import profilePlaceholder from './../../assets/img/profileplaceholder.jpg';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function SideMenu({ openSideMenu }) {

    return (
        <div className={`menu-container ${openSideMenu ? 'expanded' : ''}`}>
            <div className='menu-content'>
                <div className="menu-header">
                    <p>SARAZA123</p>
                </div>
                <div className="menu-body">
                    <Link to={"/"}>
                        <button type="button" className="btn btn-primary">Home</button>

                    </Link>
                    <Link to={"/my-projects"}>
                        <button type="button" className="btn btn-primary">My Projects</button>

                    </Link>
                    <Link to={"/my-stories"}>
                        <button type="button" className="btn btn-primary">Stories</button>

                    </Link>
                </div>
                <div className="menu-footer">
                    <img src={profilePlaceholder} alt="profile picture" className='footer-profile-picture' />
                    <div className="footer-text">
                        <h5>Louise Joy King</h5>
                        <h6>louisejoyk@email.com</h6>
                    </div>
                </div>
            </div>
            <ArrowBackIosIcon />
        </div>
    );
}

export default SideMenu;
