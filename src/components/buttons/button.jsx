import React from 'react'
import Button from '@material-ui/core/Button';
import { Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';

const button = () => {
    return (
        <div>
            <Button size="small" >
                Small
        </Button>
            <Button size="medium" >
                Medium
        </Button>
            <Button size="large" >
                Large
        </Button>
        <Button variant="outlined" size="small" color="primary" >
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" >
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" >
          Large
        </Button>
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
         
        >
          <NavigationIcon  />
          Extended
        </Fab>
        </div>
    )
}

export default button
