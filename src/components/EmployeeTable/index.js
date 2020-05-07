import React, { Component } from "react";
import API from "../../utils/API"
import EmployeeRow from "../EmployeeRow";
import "./style.css";

class EmployeeTable extends Component {
    state = {
        result: []
    };

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployees()
            // .then(res => this.setState({ result: res.data }))
            // .then(({ data }) => console.log(data))
            .then(({ data }) => this.setState({ result: data.results }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.result.map(employee => <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />)}
                </tbody>
            </table>
        );
    }
}

export default EmployeeTable;