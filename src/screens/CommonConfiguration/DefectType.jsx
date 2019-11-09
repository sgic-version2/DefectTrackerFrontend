import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid } from '@material-ui/core'
 
import BreadCrumbs from '../../components/breadCrumbs/breadCrumbs'
import Table from '../../components/tables/table'
import { Button } from 'semantic-ui-react';
import DefectTypeButton from './DefectTypeButton';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';

const columns = [
    {
       title: 'Defect_Type',
       dataIndex: 'Defect_Type',
       filters: [
          {
             text: 'Sgic1',
             value: 'Sgic2',
          },
          {
             text: 'Sgic1',
             value: 'Sgic2',
          },
       ],
       // specify the condition of filtering result
       // here is that finding the name started with `value`
       onFilter: (value, record) => record.ID.indexOf(value) === 0,
       sorter: (a, b) => a.Defect_Type.length - b.Defect_Type.length,
       sortDirections: ['descend'],
    },
    {
       title: 'Description',
       dataIndex: 'Description',
       defaultSortOrder: 'descend',
       sorter: (a, b) => a.Description - b.Description,
    },
     
    {
       title: 'Action',
       dataIndex: 'action',
       defaultSortOrder: 'descend',
    },
    {
        title: 'More',
        dataIndex: 'More',
        // defaultSortOrder: 'descend',
        // sorter: (a, b) => a.Role - b.Role,
     },
 ];


 
export default class DefectType extends Component {
    state= {value:false, 
    };
       
      handleOpen=()=>{
         this.setState({
            value:true
         })
      };
      handleClose=()=>{
       this.setState({
          value:false
       })
    
       
       
    };
       
        render() {
          const data = [
             {
                Defect_Type: 'sgic1',
                Description: 'John Brown',
                 
                
                action: <Button.Group>
                   <Button secondary  onClick={this.handleOpen}>Edit</Button>
                   <Button.Or />
                   <Button negative>Delete</Button>
                </Button.Group>,
                More:<MoreOutlinedIcon onClick={this.handleOpen}/>
             },
             {
                Defect_Type: 'sgic2',
                Description: 'John Brown',
                
                
                action: <Button.Group>
                   <Button secondary>Edit</Button>
                   <Button.Or />
                   <Button negative>Delete</Button>
                </Button.Group>,
                More:<MoreOutlinedIcon  onClick={this.handleOpen}/>
             },
             {
                Defect_Type: 'sdsedger',
                Description: 'John Brown',
               
                action: <Button.Group>
                   <Button secondary>Edit</Button>
                   <Button.Or />
                   <Button negative>Delete</Button>
                </Button.Group>,
                More:<MoreOutlinedIcon onClick={this.handleOpen}/>
             },
             {
                Defect_Type: 'sdferh',
                Description: 'John Brown',
                
                 
                 action: <Button.Group>
                    <Button secondary>Edit</Button>
                    <Button.Or />
                    <Button negative>Delete</Button>
                 </Button.Group>,
                 More:<MoreOutlinedIcon  onClick={this.handleOpen}/>
             },
          ];
            return (
                <div>
                    <Grid item xs={11} style={{ marginTop: '2%' }}>
                        <Segment>
                            <BreadCrumbs />
                            <DefectTypeButton/>
                            <Table column={columns} data={data}/>
                            
                            {/* <More open={this.state.value} handleOpen={this.handleOpen} handleClose={this.handleClose}/> */}
                        </Segment>
                    </Grid>
                </div>
            )
}
}

