import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <h1>social-Media</h1>
           <Link to="/home"><button type="button" className="btn btn-primary px-4">Home</button></Link>
        </div>
    );
};

export default Header;