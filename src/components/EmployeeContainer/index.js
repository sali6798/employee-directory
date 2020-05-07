import React, { Component } from "react";
import API from "../../utils/API"
import EmployeeTable from "../EmployeeTable";
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

    handleStateChange = (...changes) => {
        if (changes.length > 1) {
            this.setState({
                result: changes[0],
                sorted: true
            })
        }
        else {
            this.setState({
                result: changes[0]
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
                <EmployeeTable result={this.state.result} search={this.state.search} sorted={this.state.sorted} handleStateChange={this.handleStateChange}/>
            </div>
        );
    }
}

export default EmployeeContainer;