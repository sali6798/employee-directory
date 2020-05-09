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

    const sortResults = heading => {
        if (props.sortedBy === heading) {
            props.handleStateChange(props.result.reverse(), !props.flipped)
        }
        else {
            function compare(a, b) {
                let varA;
                let varB;

                switch (heading) {
                    case "name":
                        varA = a.name.first.toLowerCase();
                        varB = b.name.first.toLowerCase();
                        break;
                    case "email":
                        varA = a.email;
                        varB = b.email;
                        break;
                    default:
                        varA = a.dob.date;
                        varB = b.dob.date;
                        break;
                }

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return comparison;
            }

            props.handleStateChange(props.result.sort(compare), heading, true)
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
                                onClick={() => sortResults("name")}
                                className={props.sortedBy === "name" && props.flipped ? "rotate" : ""}
                            >
                                &#9662;
                            </span>
                        </th>
                        <th>Phone</th>
                        <th>Email
                            <span
                                onClick={() => sortResults("email")}
                                className={props.sortedBy === "email" && props.flipped ? "rotate" : ""}
                            >
                                &#9662;
                            </span>
                        </th>
                        <th>DOB
                            <span
                                onClick={() => sortResults("dob")}
                                className={props.sortedBy === "dob" && props.flipped ? "rotate" : ""}
                            >
                                &#9662;
                            </span>
                        </th>
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