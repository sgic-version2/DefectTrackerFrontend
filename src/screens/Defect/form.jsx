import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
class Form extends React.Component {
  state = {
    projectId: "",
    moduleId: "",
    defectType: "",
    severity: "",
    priority: "",
    description: '',
    // created_date: '',
    // assignto: '',
    // assignby:''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const stateDataInsert = {
      projectId: this.state.projectId,
      moduleId: this.state.moduleId,
      defectType: {
        typeId: this.state.defectType
      },
      description:this.state.description,
      // severity: {
      //   serverityId: this.state.severity
      // },
      // priority: {
      //   priorityId: this.state.priority
      // }
    };
    const stateDataUpdate = {
      projectId: this.state.projectId,
      moduleId: this.state.moduleId,
      defectType: {
        typeId: this.state.defectType.typeId
      },
      description:this.state.description,
      defectId:this.state.defectId
      // severity: {
      //   serverityId: this.state.severity.serverityId
      // },
      // priority: {
      //   priorityId: this.state.priority.priorityId
      // }
    };
    if (this.state.defectId) {
      this.props.upateDefect(stateDataUpdate); 
    } else {
      this.props.changeDataValues(stateDataInsert);
    }
  };
  componentWillReceiveProps() {
    setTimeout(
      function() {
        this.componentDidMount();
      }.bind(this),
      10
    );
  }
  componentDidMount() {
    if (this.props.selectedData !== null) {
      this.setState({
        ...this.props.selectedData
      });
    }
  }

  render() {
    console.log("checking",this.props);
    
    const {
      projectId,
      moduleId,
      defectType,
      severity,
      priority,
      fixedBy,
      foundIn,
      fixedIn,
      attachmentId,
      defectStatus,
      createdDate,
      udatedDate,
      description,
      assignto,
      assignby
    } = this.state;
    return (
      <div>
        <form class="ui form" onSubmit={this.handleSubmit}>
          <h4 class="ui dividing header">Add Defect</h4>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Project :</label>
                <select
                  class="ui fluid dropdown"
                  name="projectId"
                  placeholder="Project"
                  value={projectId}
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value={1}>Project 1</option>
                  <option value={2}>Project 2</option>
                  <option value={3}>Project 3</option>
                </select>
              </div>

              <div class="field">
                <label>Module:</label>
                <select
                  class="ui fluid dropdown"
                  name="moduleId"
                  placeholder="Module"
                  value={moduleId}
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value={1}>module 1</option>
                  <option value={2}>module 2</option>
                  <option value={3}>module 3</option>
                </select>
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
                <option selected disabled>
                  Select
                </option>
                <option value={1}>UI</option>
                <option value={2}>Functionality</option>
                <option value={3}>Enhancement</option>
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
                <option selected disabled>
                  Select
                </option>
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>Heigh</option>
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
                <option selected disabled>
                  Select
                </option>
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>Heigh</option>
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
                <option selected disabled>
                  Select
                </option>
                <option value={1}>User 1</option>
                <option value={2}>User 2</option>
                <option value={3}>User 3</option>
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
              />
            </div>
            <div class="field">
              <label>Fixed In:</label>
              <textarea
                rows="1"
                placeholder="fixedIn"
                name="fixedIn"
                value={fixedIn}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Attachment :</label>
                <textarea
                  rows="1"
                  name="attachmentId"
                  placeholder="attachment"
                  value={attachmentId}
                  onChange={this.handleChange}
                />
              </div>
              <div class="field">
                <label>Defect Status:</label>
                <select
                  class="ui fluid dropdown"
                  name="defectStatus"
                  placeholder="defectSta"
                  value={defectStatus}
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value={1}>Open</option>
                  <option value={2}>Close</option>
                  <option value={3}>InProgress </option>,,,,
                  <option value={4}>Resolved </option>
                  <option value={5}>ReOpen </option>
                  <option value={6}>Rejected </option>
                  <option value={7}>ReadyForTesting </option>
                  <option value={8}>OnHold </option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label>Description</label>
            <textarea
              rows="1"
              placeholder="description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <div class="field">
            <label>Assign To:</label>
            <select
              class="ui fluid dropdown"
              name="assignto"
              placeholder="AssignTo"
              value={assignto}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value={1}>User 1</option>
              <option value={2}>User 2</option>
              <option value={3}>User 3</option>
            </select>
          </div>
          <div class="field">
            <label>Assign By:</label>
            <select
              class="ui fluid dropdown"
              name="assignby"
              placeholder="AssignBy"
              value={assignby}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value={1}>User 1</option>
              <option value={2}>User 2</option>
              <option value={3}>User 3</option>
            </select>
          </div>
          {/* <Button positive >Save Data</Button> */}
          <button type="submit" onClick={this.props.handleClose}>
            {" "}Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
