import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
class Form extends React.Component {
  state = {
    defectId: "",
    projectId: "",
    moduleId: "",
    assignto: "",
    assignby: "",
    severity: "",
    priority: "",
    defectStatus: "",
    defectType: "",
    attachmentId: "",
    description: "",
    fixedBy: "",
    foundIn: "",
    fixedIn: "",
    createdDate: "",
    updatedDate: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeDataValues(this.state);
  };

  render() {
    const { form } = this.props;
    const {
      projectId,
      moduleId,
      assignto,
      assignby,
      severity,
      priority,
      defectStatus,
      defectType,
      attachmentId,
      description,
      fixedBy,
      foundIn,
      fixedIn,
    //   createdDate,
    //   updatedDate
    } = this.state;

    return (
      <div>
        <form class="ui form" onSubmit={this.handleSubmit}>
          <h4 class="ui dividing header">Add Defect</h4>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Project :</label>
                <input
                  type="text"
                  name="projectId"
                  placeholder="Project"
                  value={projectId}
                  onChange={this.handleChange}
                />
              </div>
              <div class="field">
                <label>Module:</label>
                <input
                  type="text"
                  name="moduleId"
                  placeholder="Module"
                  value={moduleId}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div class="three fields">
            <div class="field">
              <label>Defect Type:</label>
              <select
                class="ui fluid dropdown"
                name="defectType"
                placeholder="DefectType"
                value={defectType}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="AL">UI</option>
                <option value="Functionality">Functionality</option>
                <option value="Enhancement">Enhancement</option>
              </select>
            </div>
            <div class="field">
              <label>Severity:</label>
              <select
                class="ui fluid dropdown"
                name="severity"
                placeholder="Severity"
                value={severity}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Heigh">Heigh</option>
              </select>
            </div>
            <div class="field">
              <label>Priority:</label>
              <select
                class="ui fluid dropdown"
                name="priority"
                placeholder="Priority"
                value={priority}
                onChange={this.handleChange}
              >
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
              <select
                class="ui fluid dropdown"
                name="fixedBy"
                placeholder="fixedBy"
                value={fixedBy}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="User-1">User 1</option>
                <option value="User-2">User 2</option>
                <option value="User-3">User 3</option>
              </select>
            </div>
            <div class="field">
              <label>Found In:</label>
              <textarea
                rows="1"
                placeholder="foundIn"
                name="foundIn"
                value={foundIn}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div class="field">
              <label>Fixed In:</label>
              <textarea
                rows="1"
                placeholder="fixedIn"
                name="fixedIn"
                value={fixedIn}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Attachment :</label>
                <input
                  type="text"
                  name="attachmentId"
                  placeholder="Attachment..."
                  value={attachmentId}
                  onChange={this.handleChange}
                />
              </div>
              <div class="field">
                <label>Defect Status:</label>
                <select
                  class="ui fluid dropdown"
                  name="defectStatus"
                  placeholder="Defect Status..."
                  value={defectStatus}
                  onChange={this.handleChange}
                >
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
            <textarea
              rows="1"
              placeholder="Description..."
              name="description"
              value={description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div class="field">
            <label>Assign To:</label>
            <select
              class="ui fluid dropdown"
              name="assignto"
              placeholder="Assign To..."
              value={assignto}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="User-1">User 1</option>
              <option value="User-2">User 2</option>
              <option value="User-3">User 3</option>
            </select>
          </div>
          <div class="field">
            <label>Assign By:</label>
            <select
              class="ui fluid dropdown"
              name="assignby"
              placeholder="Assign By..."
              value={assignby}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="User-1">User 1</option>
              <option value="User-2">User 2</option>
              <option value="User-3">User 3</option>
            </select>
          </div>
          {/* <Button positive >Save Data</Button> */}
          <button type="submit" onClick={this.props.openFormClose}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
