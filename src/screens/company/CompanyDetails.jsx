import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import AddButton from '../company/AddButton'
import EditCompany from '../../screens/company/EditCompany';
import { Popconfirm, message } from 'antd'
import MoreDetails from './MoreDetails'


const text = 'Are you sure delete this task?'; //Delete button

function confirm() {
   message.info('Click on Yes.');
}
export default class CompanyDetails extends Component {
   state = {
      open: false,
      open1: false
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
   render() {
      const columns = [
         {
            title: 'Registration Id',
            dataIndex: 'regid',
            filters: [
               {
                  text: 'Joe',
                  value: 'Joe',
               },
               {
                  text: 'Jim',
                  value: 'Jim',
               },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.regid.indexOf(value) === 0,
            sorter: (a, b) => a.regid.length - b.regid.length,
            sortDirections: ['descend'],
         },
         {
            title: 'Company Name',
            dataIndex: 'companyname',
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
            dataIndex: 'licenseprriod',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.licenseprriod - b.licenseprriod,
         },
         {
            title: 'IT Admin',
            dataIndex: 'itadmin',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.itadmin - b.itadmin,
         },
         {
            title: 'Action',
            dataIndex: 'action',
            defaultSortOrder: 'descend',
         },
         {
            title: 'More',
            dataIndex: 'more',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.more - b.more,
         },
      ];
      const data = [
         {
            key: '1',
            regid: 'SGIC-001',
            companyname: 'John Keels',
            abbreviation: 'JK',
            licenseprriod: '6Yrs',
            itadmin: 'John ',

            action: <Button.Group>
               <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
               <Button onClick={this.handleOpen} secondary>Edit</Button>
               <Button.Or />
               <Popconfirm placement="topRight" title={text} onConfirm={confirm} okText="yes" cancelText="No">
                  <Button negative>Delete</Button>
               </Popconfirm>
            </Button.Group>,
            more:
               <MoreOutlinedIcon onClick={this.handleOpen1} />,
         },
         {
            key: '2',
            regid: 'SGIC-002',
            companyname: 'Nandha Gobalan Kumaran',
            abbreviation: 'NGK',
            licenseprriod: '5 yrs',
            itadmin: 'Selvaragavan',

            action: <Button.Group>
               <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
               <Button onClick={this.handleOpen} secondary>Edit</Button>
               <Button.Or />
               <Button negative>Delete</Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={this.handleOpen1} />,
         },
         {
            key: '3',
            regid: 'SGIC-003',
            companyname: 'UVA Wellassa University',
            abbreviation: 'UWU',
            licenseprriod: '10 yrs',
            itadmin: 'Ranjith',

            action: <Button.Group>
               <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
               <Button onClick={this.handleOpen} secondary>Edit</Button>
               <Button.Or />
               <Button negative>Delete</Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={this.handleOpen1} />,

         },
         {
            key: '4',
            regid: 'SGIC-004',
            companyname: 'cargils Food City',
            abbreviation: 'CFC',
            licenseprriod: '3 Yrs',
            itadmin: 'Amuthan',

            action: <Button.Group>
               <EditCompany open={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} />
               <Button onClick={this.handleOpen} secondary>Edit</Button>
               <Button.Or />
               <Button negative>Delete</Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={this.handleOpen1} />,
         },

      ];
      return (
         <div>
            <Grid direction="row" container>
               <Grid item xs={11} style={{ marginTop: '2%' }}>
                  <Segment>
                     <BreadCrumbs />
                     <AddButton />
                     <Table column={columns} data={data} />
                     <MoreDetails open={this.state.open1} handleOpen1={this.handleOpen1} handleClose1={this.handleClose1} />
                  </Segment>
               </Grid>
            </Grid>
         </div>
      )
   }
}
