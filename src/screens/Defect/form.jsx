import React from 'react'
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
class Form extends React.Component {
    state = {
        project_id: '',
        module_id: '',
        defect_type_id: '',
        severity_id: '',
        priority_id: '',
        description: '',
        created_date: '',
        assignto: '',
        assignby:''
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
        } = this.props;
        const { project_id, module_id, defect_type_id, severity_id, priority_id,fixed_by,found_in,fixed_in,attachment_id,status_id,created_date,udated_date, description, assignto,assignby } = this.state
        return (
            <div>
                <form class="ui form" onSubmit={this.handleSubmit}>
                    <h4 class="ui dividing header">Add Defect</h4>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Project :</label>
                                <input type="text" name="project_id" placeholder="Project" value={project_id} onChange={this.handleChange} />
                            </div>
                            <div class="field">
                                <label>Module:</label>
                                <input type="text" name="module_id" placeholder="Module" value={module_id} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Defect Type:</label>
                            <select class="ui fluid dropdown" name="defect_type_id" placeholder="DefectType" value={defect_type_id} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value="AL">UI</option>
                                <option value="Functionality">Functionality</option>
                                <option value="Enhancement">Enhancement</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Severity:</label>
                            <select class="ui fluid dropdown" name="severity_id" placeholder="Severity" value={severity_id} onChange={this.handleChange}>
                                <option value="">Select</option>
                                <option value={1}>Low</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Heigh</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Priority:</label>
                            <select class="ui fluid dropdown" name="priority_id" placeholder="Priority" value={priority_id} onChange={this.handleChange}>
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
                            <select class="ui fluid dropdown" name="fixed_by" placeholder="fixedBy" value={fixed_by} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="User-1">User 1</option>
                            <option value="User-2">User 2</option>
                            <option value="User-3">User 3</option>
                            </select>
                        </div>
                        <div class="field">
                            <label>Found In:</label>
                            <textarea rows="1" placeholder="found_in" name="foundIn" value={found_in} onChange={this.handleChange}></textarea>
                        </div>
                        <div class="field">
                            <label>Fixed In:</label>
                            <textarea rows="1" placeholder="fixed_in" name="fixedIn" value={fixed_in} onChange={this.handleChange}></textarea>   
                        </div>
                    </div>
                    <div class="field">
                        <div class="two fields">
                            <div class="field">
                                <label>Attachment :</label>
                                <input type="text" name="attachment_id" placeholder="attachment" value={attachment_id} onChange={this.handleChange} />
                            </div>
                            <div class="field">
                                <label>Defect Status:</label>
                                <select class="ui fluid dropdown" name="status_id" placeholder="defectSta" value={status_id} onChange={this.handleChange}>
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
                        <label>Description</label>
                        <textarea rows="1" placeholder="description" name="description" value={description} onChange={this.handleChange}></textarea>
                    </div>
                    <div class="field">
                        <label>Assign To:</label>
                        <select class="ui fluid dropdown" name="assignto" placeholder="AssignTo" value={assignto} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="User-1">User 1</option>
                            <option value="User-2">User 2</option>
                            <option value="User-3">User 3</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Assign By:</label>
                        <select class="ui fluid dropdown" name="assignby" placeholder="AssignBy" value={assignby} onChange={this.handleChange}>
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