import React from "react";
import EmployeeRow from "../EmployeeRow";
import "./style.css";

function EmployeeTable(props) {
    const displayEmployees = () => {
        if (props.search) {
            const filteredEmployees = props.result.filter(employee => `${employee.name.first} ${employee.name.last}`.toLowerCase().includes(props.search.toLowerCase()));
            return filteredEmployees.map(employee => <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />)
        }
        return props.result.map(employee => <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />)
    }

    const orderNames = () => {
        if (props.sorted) {
            props.handleStateChange(props.result.reverse())
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
    
            props.handleStateChange(props.result.sort(compare), true)
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name<span onClick={orderNames}>&#9662;</span></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {displayEmployees()}
            </tbody>
        </table>
    );
}

export default EmployeeTable;