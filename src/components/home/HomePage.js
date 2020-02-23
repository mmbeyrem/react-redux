import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
    return <div className="jumbotron">
        <h1> Plursight Administrator</h1>
        <p> React and Redux</p>
        <Link to='about' className='btn btn-primary btn-large' >
            Learn More
        </Link>
    </div>;
}

export default HomePage;