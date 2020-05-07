import React from "react";
import "./style.css";

function EmployeeRow(props) {

    
    return (
        <tr className="row">
            <td>
                <img src={props.image} alt={props.name}/>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{window.moment(props.dob).format("MM-DD-YYYY")}</td>
        </tr>
    );
}

export default EmployeeRow;