import React from 'react'
import { connect } from "react-redux";
import { changeDataValues } from "./addEmployeeAction";
import { Button } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
    data: state.addEmployeeData.employeeDetailsFromState
})
const mapDispatchToProps = {
    changeDataValues
}
class add_employee_form extends React.Component {
    state = {
        employeeID: '',
        employeeName: '',
        employeeDesignation: '',
        employeeEmail: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.changeDataValues(this.state)
    }
    render() {
        const { employeeID, employeeName, employeeDesignation,employeeEmail } = this.state
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ textAlign: 'center' }}>
                            <label>Employee Id:</label>
                            <input type="text" value={employeeID} placeholder="Employee Id" onChange={this.handleChange} name="employeeID" />
                            <br />
                            <label>Employee Name:</label>
                            <input type="text" placeholder="Employee Name" value={employeeName} onChange={this.handleChange} name="employeeName" />
                            <br />
                            <label>Designation:</label>
                            <select onChange={this.handleChange} value={employeeDesignation} name="employeeDesignation">
                                <option selected>-----Select One-----</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                                <option value="HR">HR</option>
                                <option value="PM">PM</option>
                                <option value="QAL">QAL</option>
                                <option value="TECL">TECL</option>
                                <option value="QA">QA</option>
                                <option value="DEV">DEV</option>
                            </select>
                            <br />
                            <label>Email:</label>
                            <input type="text" placeholder="Email" name="employeeEmail" value={employeeEmail} onChange={this.handleChange} />
                            <Button positive >Save Data</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(add_employee_form)
