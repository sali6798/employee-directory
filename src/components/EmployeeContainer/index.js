import React, { Component } from "react";
import API from "../../utils/API"
import EmployeeRow from "../EmployeeRow";
import Search from "../Search"
import "./style.css";

class EmployeeContainer extends Component {
    state = {
        result: [],
        search: "",
        sorted: false
    };

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployees()
            .then(({ data }) => this.setState({ result: data.results }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    displayEmployees = () => {
        if (this.state.search) {
            const filteredEmployees = this.state.result.filter(employee => `${employee.name.first} ${employee.name.last}`.toLowerCase().includes(this.state.search.toLowerCase()));
            return filteredEmployees.map(employee => <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />)
        }
        return this.state.result.map(employee => <EmployeeRow key={employee.login.uuid} image={employee.picture.thumbnail} name={`${employee.name.first} ${employee.name.last}`} phone={employee.phone} email={employee.email} dob={employee.dob.date} />)
    }

    orderNames = () => {
        if (this.state.sorted) {
            this.setState({
                result: this.state.result.reverse()
            })
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
    
            this.setState({
                result: this.state.result.sort(compare),
                sorted: true
            })
        }
    }

    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name<span onClick={this.orderNames}>&#9662;</span></th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayEmployees()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmployeeContainer;