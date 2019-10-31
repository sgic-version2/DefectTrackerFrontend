import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { Grid  } from '@material-ui/core'

 import BreadCrumbs from '../../../../../components/breadCrumbs/breadCrumbs'
import Table from '../../../../../components/tables/table'

import Export from '../Export/Export';

import CustomizedMenus from '../Manage/Manage';
import Date from '../Date_Picker/date';
import { Icon } from 'antd';

const columns = [
    {
       title: 'Date/Time',
       dataIndex: 'date',
       filters: [
          {
             text: '2019/10/28 10:30 AM',
             value: 'Joe',
          },
          {
             text: '2019/10/29 10:25 AM',
             value: 'Jim',
          },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.date.indexOf(value) === 0,
       sorter: (a, b) => a.date.length - b.date.length,
       sortDirections: ['descend'],
    },
    {
       title: 'Author',
       dataIndex: 'author',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.author - b.author,
    },
    {
       title: 'Work Category',
       dataIndex: 'work',
       defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
     },
    {
       title: 'View',
       dataIndex: 'view',
       defaultSortOrder: 'descend',
    },
 ];
 
 const data = [
    {
       key: '1',
       date: '2019/10/29 10:30 AM',
       author:"kiri",
       work: 'normal',
       summary:'no',
       view: <Icon type="eye" theme="filled"/>
     
    },
    {
        key: '2',
        date: '2019/11/1 10:40 AM',
        author:"arun",
        work: 'nbj',
        summary:'nnj',
        view: <Icon type="eye" theme="filled"/>
     
    },
    {
      key: '3',
      date: '2019/11/12 9:45 AM',
      author:'amuthu',
      work: 'hard',
      summary:'no',
      
       view: <Icon type="eye" theme="filled"/>
    },
    {
       
      key: '3',
      date: '2019/11/15 11:20 AM',
      author:'gopi',
      work: 'easy',
      summary:'no',
       view:  <Icon type="eye" theme="filled"/>
    },
 ];
class Audit_table extends Component {
   state = { visible: false };

   showModal = () => {
     this.setState({
       visible: true,
     });
   };
 
   handleOk = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };
 
   handleCancel = e => {
     console.log(e);
     this.setState({
       visible: false,
     });
   };
    render() { 
        return ( 
            <div>
          
       
            <Grid item xs={11} style={{ marginTop: '2%' }}>
            <Segment>
                 <BreadCrumbs /> 
              <CustomizedMenus/>
                <Export/>
               <Date/>
                <Table column={columns} data={data}/>
            </Segment>
        </Grid>
        </div>
        );
    }
}
 
export default Audit_table;