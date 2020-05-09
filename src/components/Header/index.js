import React from 'react';
import "./style.css";

function Header() {
    return (
        <header>
            <h1>Employee Directory</h1>
            <p>
                Start typing in a name in the search bar below or order the employees<br />
                by clicking on the arrow next to the table headings
            </p>
        </header>
    );
}

export default Header;