import React from 'react'
import { Button } from 'semantic-ui-react'
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
class Form extends React.Component {
    state = {
        Project: '',
        Module: '',
        Type: '',
        Severity: '',
        Priority: '',
        description: '',
        StepsToRecreate: '',
        AssignTo: '',
        AssignBy:''
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
        const {
            form,
            open,
            handleOpen,
            handleClose,
            width,
            title,
            changeDataValues
        } = this.props;
        const { Project, Module, DefectType, Severity, Priority,fixedBy,foundIn,fixedIn,attachment,defectSta,createdDate,updatedDate, description, AssignTo,AssignBy } = this.state
        return (
            <div>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <h4 class="ui dividing header">Add Defect</h4>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Project :</label>
                                <input type="text" name="Project" placeholder="Project" value={this.state.Project} onChange={this.handleChange} />
                            </div>
                            <div class="field">
                                <label>Module:</label>
                                <input type="text" name="Module" placeholder="Module" value={this.state.Module} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Defect Type:</label>
                            <select class="ui fluid dropdown" name="DefectType" placeholder="DefectType" value={this.state.DefectType} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="AL">UI</option>
                                <option value="Functionality">Functionality</option>
                                <option value="Enhancement">Enhancement</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Severity:</label>
                            <select class="ui fluid dropdown" name="Severity" placeholder="Severity" value={this.state.Severity} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="Heigh">Heigh</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Priority:</label>
                            <select class="ui fluid dropdown" name="Priority" placeholder="Priority" value={this.state.Priority} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="Heigh">Heigh</option>
                            </select>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Fixed By:</label>
                            <select class="ui fluid dropdown" name="fixedBy" placeholder="fixedBy" value={this.state.fixedBy} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="User-1">User 1</option>
                            <option value="User-2">User 2</option>
                            <option value="User-3">User 3</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Found In:</label>
                            <textarea rows="1" placeholder="foundIn" name="foundIn" value={this.state.foundIn} onChange={this.handleChange}></textarea>
                        </div>
                        <div class="field">
                            <label>Fixed In:</label>
                            <textarea rows="1" placeholder="fixedIn" name="fixedIn" value={this.state.fixedIn} onChange={this.handleChange}></textarea>   
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Attachment :</label>
                                <input type="text" name="attachment" placeholder="attachment" value={this.state.attachment} onChange={this.handleChange} />
                            </div>
                            <div class="field">
                                <label>Defect Status:</label>
                                <select class="ui fluid dropdown" name="defectSta" placeholder="defectSta" value={this.state.defectSta} onChange={this.handleChange}>
                                    <option value="">Select</option>
                                    <option value="Open">Open</option>
                                    <option value="Close">Close</option>
                                    <option value="InProgress">InProgress </option>,,,,
                                    <option value="Resolved">Resolved </option>
                                    <option value="ReOpen">ReOpen </option>
                                    <option value="Rejected">Rejected </option>
                                    <option value="ReadyForTesting">ReadyForTesting </option>
                                    <option value="OnHold">OnHold </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Created Date :</label>
                                <DatePicker
                                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                                    format={dateFormatList}
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div class="field">
                                <label>Updated Date:</label>
                                <DatePicker
                                    defaultValue={moment("01/01/2015", dateFormatList[0])}
                                    format={dateFormatList}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <textarea rows="1" placeholder="description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <div class="field">
                        <label>Assign To:</label>
                        <select class="ui fluid dropdown" name="AssignTo" placeholder="AssignTo" value={this.state.AssignTo} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="User-1">User 1</option>
                            <option value="User-2">User 2</option>
                            <option value="User-3">User 3</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Assign By:</label>
                        <select class="ui fluid dropdown" name="AssignBy" placeholder="AssignBy" value={this.state.AssignBy} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="User-1">User 1</option>
                            <option value="User-2">User 2</option>
                            <option value="User-3">User 3</option>
                        </select>
                    </div>
                    {/* <Button positive >Save Data</Button> */}
                    <button type="submit" onClick={this.props.openFormClose}> Submit </button>
                </form>
            </div>
        )
    }
}
export default Form