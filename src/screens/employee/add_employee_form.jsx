import React from 'react'
import { Button } from 'semantic-ui-react';

class add_employee_form extends React.Component {
    state = {
        employeeID: "",
        firstname: "",
        lastname:"",
        employeeDesignation: "",
        employeeEmail: "",
        phonenumber:""
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
       // const { employeeID, employeeName, employeeDesignation,employeeEmail } = this.state
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ textAlign: 'center' }}>
                            <label>First Name:</label>
                            <input type="text" 
                            value={this.state.firstname} 
                            placeholder="Employee First Name" 
                            onChange={this.handleChange} 
                            name="firstname" />
                            <br />
                            <label>Last Name:</label>
                            <input type="text"
                             placeholder="Employee Last Name" 
                             value={this.state.lastname} 
                             onChange={this.handleChange} 
                             name="lastname" />
                            <br />
                            <label>Phone Number:</label>
                            <input type="text" 
                            placeholder="Phone Number"
                             value={this.state.phonenumber} 
                             onChange={this.handleChange} 
                             name="phonenumber" />
                            <br />
                            <label>Designation:</label>
                            <select onChange={this.handleChange} 
                            value={this.state.employeeDesignation} 
                            name="employeeDesignation">
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
                            <input type="text"
                             placeholder="Email"
                              name="employeeEmail"
                               value={this.state.employeeEmail} 
                               onChange={this.handleChange} />
                            <Button positive onClick={this.props.openFormClose} >Save Data </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default add_employee_form
