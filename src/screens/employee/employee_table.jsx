import React, { Component } from 'react';

import { connect } from "react-redux";
import { changeDataValues } from "../../fileAction/addEmployeeAction";

import Delete from './delete'

// import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import Table from '../../components/tables/table'
import More from './more_details'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import EmployeeButton from './EmployeeButton';




import { Button } from 'semantic-ui-react';
import EditEmployee from './edit_employee';


const mapStateToProps = (state) => ({
    data: state.addEmployeeData.employeeDetailsFromState
 })
 const mapDispatchToProps = {
    changeDataValues
 }



class EmployeeTable extends Component {
    state = { open:false }
    handleOpen =()=>{
        this.setState({open:true});
      };
    
    handleClose =()=>{
        this.setState({open:false});
        
      };
    render() { 
        const columns = [
            {
               title: 'First name',
               dataIndex: 'firstname',
               filters: [
                  {
                     text: 'vithujan',
                     value: 'vithujan',
                  },
                  {
                     text: 'vithujan',
                     value: 'vithujan',
                  },
               ],
               // specify the condition of filtering result
               // here is that finding the name started with `value`
               onFilter: (value, record) => record.name.indexOf(value) === 0,
               sorter: (a, b) => a.name.length - b.name.length,
               sortDirections: ['descend'],
            },
            {
               title: 'Last Name',
               dataIndex: 'lastname',
               defaultSortOrder: 'descend',
               sorter: (a, b) => a.age - b.age,
            },
            {
               title: 'Designation',
               dataIndex: 'employeeDesignation',
               defaultSortOrder: 'descend',
               sorter: (a, b) => a.age - b.age,
            },
            {
               title: 'Email',
               dataIndex: 'employeeEmail',
               defaultSortOrder: 'descend',
               sorter: (a, b) => a.age - b.age,
            },
         
            {
               title: 'Action',
              render:item=><Button.Group>
                 <EditEmployee open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
                <Button secondary onClick={this.handleOpen}>Edit</Button>
                <Button.Or />
                <Delete open={this.state.open} handleOpen={this.handleOpen.del} handleClose={this.handleClose} />
             </Button.Group>
            },
            {
               title: 'View More',
             render:item=><Button.Group>
                    <More open={this.stateopen} handleOpen={this.handleOpen} handleClose={this.handleClose} />
                   </Button.Group>
            },
         ];
        return ( 
 <div>
 <Grid direction="row" container>
    <Grid item xs={11} style={{ marginTop: '2%' }}>
       <Segment>
          <BreadCrumbs />
          
   {/* <AddEmployee
    open={this.state.open}
     handleOpen={this.handleOpen}
     handleClose={this.handleClose}
     changeDataValues={this.props.changeDataValues}
   /> */}

          <EmployeeButton changeDataValues={this.props.changeDataValues} />
          <Table column={columns}  data={this.props.data}  />       </Segment>
    </Grid>
 </Grid>
</div>
        )
}
}
 

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTable);