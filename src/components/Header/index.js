import React from 'react';
import "./style.css";

function Header() {
    return (
        <header>
            <h1>Employee Directory</h1>
            <p>
                Start typing in a name in the search bar below or sort the employees in<br />
                alphabetical order by clicking on the arrow button next to Name
            </p>
        </header>
    );
}

export default Header;