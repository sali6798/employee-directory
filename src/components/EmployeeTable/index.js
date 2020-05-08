import React from "react";
import EmployeeRow from "../EmployeeRow";
import "./style.css";

function EmployeeTable(props) {
    let filteredEmployees = [];
    const createRow = employee => {
        return <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />
    }

    const displayEmployees = () => {
        if (props.search) {
            filteredEmployees = props.result.filter(employee => `${employee.name.first} ${employee.name.last}`.toLowerCase().includes(props.search.toLowerCase()));
            
            if (filteredEmployees.length > 0) {
                return filteredEmployees.map(employee => createRow(employee))
            }
            return;
        }
        return props.result.map(employee => createRow(employee))
    }

    const orderNames = () => {
        if (props.sorted) {
            props.handleStateChange(props.result.reverse(), !props.flipped)
        }
        else {
            function compare(a, b) {
                const nameA = a.name.first.toLowerCase();
                const nameB = b.name.first.toLowerCase();

                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                }
                return comparison;
            }

            props.handleStateChange(props.result.sort(compare), true, true)
        }
    }

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name
                        <span
                            onClick={orderNames}
                            className={props.flipped ? "rotate" : ""}
                        >
                            &#9662;
                        </span>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {displayEmployees()}
                </tbody>
            </table>
            <h1 className={props.search && filteredEmployees.length < 1 ? "alert" : "hide"}>Employee does not exist!</h1>
        </div>
    );
}

export default EmployeeTable;