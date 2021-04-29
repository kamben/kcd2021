import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineIcon from 'react-lineicons';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [information, setInformation] = useState("");
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() => {
        axios.get('/api/information')
            .then(response => {
                setInformation(response.data);
            })
    }, [])

    return (
        <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
            <button onClick={handleNavigationToggler} className="mi-header-toggler">
                {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
            </button>
            <div className="mi-header-inner">
                <div className="mi-header-image">
                    <Link to="/">
                        <img src={information.brandImage} alt="brandimage" />
                    </Link>
                </div>

                <ul className="mi-header-menu">
                    <li><NavLink exact to="/"><span>Hjem</span></NavLink></li>
                    <li><NavLink to="/about"><span>Mer Om meg</span></NavLink></li>
                    {/* <li><NavLink to="/resume"><span>Resume</span></NavLink></li> */}
                    <li><NavLink to="/portfolios"><span>Portfolio</span></NavLink></li>
                    {/* <li><NavLink to="/blogs"><span>Blogs</span></NavLink></li> */}
                    <li><NavLink to="/contact"><span>TA Kontakt</span></NavLink></li>
                </ul>
                <p className="mi-header-copyright"><b>Kamben Consulting & Development (KCD)</b><br/>
                &copy; {new Date().getFullYear()}
                </p>
                
            </div>
        </nav>
    )
}


export default Header;