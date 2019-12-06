import React, { Component } from 'react';
import Tables from '../../components/tables/table';
import { Button, Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import AddDefect from './addDefect';
import More from './more';
import EditDefect from './editDefect';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import { connect } from 'react-redux';
import {
  changeDataValues,
  getDefectData,
  upateDefect,
  deleteDefect
} from '../../fileAction/defectAction';

const mapStateToProps = state => ({
  data: state.defectState.defectState
});
const mapDispatchToProps = {
  changeDataValues,
  getDefectData,
  upateDefect,
  deleteDefect
};
class ViewDefect extends Component {
  state = {
    open: false,
    value: false,
    selectedData: ''
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleOpenmore = () => {
    this.setState({
      valueMore: true
    });
  };

  handleClosemore = () => {
    this.setState({
      valueMore: false
    });
  };
  handleOpenEdit = data => {
    this.setState({
      value: true,
      selectedData: data
    });
  };

  handleCloseEdit = () => {
    this.setState({
      value: false
    });
  };
  componentDidMount() {
    this.props.getDefectData();
  }
  render() {
    const columns = [
      {
        title: 'Project',
        dataIndex: 'Project',
        sortDirections: ['descend'],
        sorter: (a, b) => a.defectId - b.defectId
      },
      {
        title: 'Module Name',
        dataIndex: 'Module',
        sortDirections: ['descend'],
        sorter: (a, b) => a.moduleName - b.moduleName
      },
      {
        title: 'Severity',
        dataIndex: 'Severity',
        filters: [
          {
            text: 'Low',
            value: 'low'
          },
          {
            text: 'Medium',
            value: 'medium'
          },
          {
            text: 'Heigh',
            value: 'heigh'
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.severity.indexOf(value) === 0,
        sorter: (a, b) => a.severity.length - b.severity.length,
        sortDirections: ['descend']
      },
      {
        title: 'Priority',
        dataIndex: 'Priority',
        filters: [
          {
            text: 'Low',
            value: 'low'
          },
          {
            text: 'Medium',
            value: 'medium'
          },
          {
            text: 'Heigh',
            value: 'heigh'
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.priority.indexOf(value) === 0,
        sorter: (a, b) => a.priority.length - b.priority.length,
        sortDirections: ['descend']
      },
      {
        title: 'Defect Type',
        dataIndex: 'DefectType',
        filters: [
          {
            text: 'UI',
            value: 'ui'
          },
          {
            text: 'Functional',
            value: 'functional'
          },
          {
            text: 'Enhancement',
            value: 'enhancement'
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.typeId.indexOf(value) === 0,
        sorter: (a, b) => a.typeId.length - b.typeId.length,
        sortDirections: ['descend']
      },
      {
        title: 'Description',
        dataIndex: 'description'
      },
      {
        title: 'Status',
        dataIndex: 'defectSta',
        filters: [
          {
            text: 'Open',
            value: 'open'
          },
          {
            text: 'Close',
            value: 'close'
          },
          {
            text: 'InProgress',
            value: 'inProgress'
          },
          {
            text: 'Resolved',
            value: 'resolved'
          },
          {
            text: 'ReOpen',
            value: 'reOpen'
          },
          {
            text: 'Rejected',
            value: 'rejected'
          },
          {
            text: 'ReadyForTesting',
            value: 'readyForTesting'
          },
          {
            text: 'OnHold',
            value: 'onHold'
          }
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        sorter: (a, b) => a.status.length - b.status.length,
        sortDirections: ['descend']
      },
      {
        title: 'Action',
        render: (Item, key) => (
          <Button.Group>
            <Button secondary onClick={() => this.handleOpenEdit(key)}>
              Edit
            </Button>
            <Button.Or />
            <Button
              negative
              onClick={() => this.props.deleteDefect(key.defectId)}
            >
              Delete
            </Button>
          </Button.Group>
        )
      },
      {
        title: 'More',
        render: Item => <MoreOutlinedIcon onClick={this.handleOpenmore} />
      }
    ];

    const data = [
      {
        key: '1',
        defectId: 'D001',
        moduleName: 'Login',
        severity: 'Low',
        priority: 'Heigh',
        typeId: 'UI',
        defectsta: 'reOpen',
        action: '',
        more: ''
      }
    ];
    return (
      <div>
        <Grid direction='row' container>
          <Grid item xs={11} style={{ marginTop: '2%' }}>
            <Segment>
              <AddDefect
                open={this.state.open}
                handleClose={this.handleClose}
                handleOpen={this.handleOpen}
                changeDataValues={this.props.changeDataValues}
              />
              <Button color='primary' onClick={this.handleOpen}>
                AddDefect
              </Button>
              <Tables column={columns} data={this.props.data} />
              <EditDefect
                open={this.state.value}
                handleOpen={this.handleOpenEdit}
                handleClose={this.handleCloseEdit}
              />
              <More
                open={this.state.valueMore}
                handleOpen={this.handleOpenmore}
                handleClose={this.handleClosemore}
              />
            </Segment>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewDefect);
