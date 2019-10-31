import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
class Export extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                
                <Button  href="https://res.cloudinary.com/kiri/raw/upload/v1572277330/Defect_tracker/Audit_b5xo6s.xlsx" color="primary">Export</Button>

            </div>
         );
    }
}
 
export default Export ;