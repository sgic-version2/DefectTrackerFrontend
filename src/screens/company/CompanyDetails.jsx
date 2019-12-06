import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import AddButton from './AddButton'
import EditCompany from '../../screens/company/EditCompany';
import { Popconfirm, message } from 'antd'
import MoreDetails from './MoreDetails'
import { connect } from "react-redux";
import { changeDataValues } from "../../fileAction/companyAction";
import {getCompanyData} from './../../fileAction/companyAction'
const text = 'Are you sure delete this task?'; //Delete button

function confirm() {
   message.info('Click on Yes.');
}
const mapStateToProps = state => ({
   data: state.comanyState.comanyState
})
const mapDispatchToProps = {
   changeDataValues,
   getCompanyData
}
// const mapStateToProps = state => ({
//    data: state.defectState.defectState
//  });
//  const mapDispatchToProps = {
//    changeDataValues,
//    getDefectData,
//    upateDefect,deleteDefect
//  };
 class CompanyDetails extends Component {
   state = {
      open: false,
      open1: false,
     
    
    
  }
   handleOpen = () => {
      this.setState({
         open: true
      })
   };

   handleClose = () => {
      this.setState({
         open: false
      })
   };
   handleOpen1 = () => {
      this.setState({
         open1: true
      })
   };

   handleClose1 = () => {
      this.setState({
         open1: false
      })
   };
   componentDidMount() {
      this.props.getCompanyData();
    }
   render() {
      
      
      const columns = [
         {
            title: 'Registration Id',
            dataIndex: 'reg_no',
            // filters: [
            //    {
            //       text: 'Joe',
            //       value: 'Joe',
            //    },
            //    {
            //       text: 'Jim',
            //       value: 'Jim',
            //    },
            // ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.regid.indexOf(value) === 0,
            sorter: (a, b) => a.regid.length - b.regid.length,
            sortDirections: ['descend'],
         },
         {
            title: 'Company Name',
            dataIndex: 'company_name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
         },
         {
            title: 'Abbreviation',
            dataIndex: 'abbreviation',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.companyname - b.companyname,
         },
         {
            title: 'License Period',
            dataIndex: 'license_period',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.licenseprriod - b.licenseprriod,
         },
         {
            title: 'IT Admin',
            dataIndex: 'admin_name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.itadmin - b.itadmin,
         },
         {
            title: 'Action',
            render:item=> <Button.Group>
            <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
            <Button onClick={this.handleOpen} secondary>Edit</Button>
            <Button.Or />
            <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No">
               <Button negative>Delete</Button>
            </Popconfirm>
         </Button.Group>,
         },
         {
            title: 'More',
            render:item=> <MoreOutlinedIcon onClick={this.handleOpen1} />,
         },
      ];
      
        
    
      console.log("hg"+this.props.data);
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <AddButton changeDataValues={this.props.changeDataValues} />
                     <Table column={columns} data={this.props.data} />
                     <MoreDetails open={this.state.open1} handleOpen1={this.handleOpen1} handleClose1={this.handleClose1} />
                  </Segment>
               </Grid>
            </Grid>
         </div>
      )
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails)