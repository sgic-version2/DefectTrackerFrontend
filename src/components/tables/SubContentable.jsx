import React from 'react';
import { Table } from 'antd';
import { Grid } from '@material-ui/core';
import SubTable from '../../screens/Module/table'

/* App bar using Ant ui
* app bar have 2 properties
   ** columns - headings for table
   ** data- table data
*/


const table = ({ column, data,TableData }) => {
   const useStyle = {
      table: {
         background: '#fff',
      }
   }
   return (
      <Grid item xs={12} style={{ marginTop: '2%' }}>
         <Table columns={column} dataSource={data} style={useStyle.table} expandedRowRender={record =><SubTable TableData={TableData} />} />
      </Grid>
   );
}

export default table;




