import React from 'react';
import { Table} from 'antd';
/* App bar using Ant ui
* app bar have 2 properties
   ** columns - headings for table
   ** data- table data
*/
  
const table = ({data, columns}) => {
    return ( 
        <Table columns={columns} dataSource={data} />
     );
}
 
export default table;

  


