import React from "react";

function Search(props) {
    return (
        <form>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search For An Employee"
                id="search"
            />
        </form>
    );
}

export default Search;