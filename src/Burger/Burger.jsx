import React, { useState } from "react";
import "./style.css";

const Burger = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`line ${menuOpen ? "rotate1" : ""}`}></span>
                    <span className={`line ${menuOpen ? "hide" : ""}`}></span>
                    <span className={`line ${menuOpen ? "rotate2" : ""}`}></span>
                </div>

                <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Burger;
