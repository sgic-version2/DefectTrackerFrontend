import React from 'react'
import { Grid } from '@material-ui/core'
import { AutoComplete } from 'antd'

const EditRole = () => {
    const useStyle = {
        forntStyle: {
            fontWeight: 900
        },
        root: {
            padding: '5px'
        }
    }
    const dataSource = ['Teach Lead', 'QA Lead', 'Software Engineer', 'Senior Software Engineer'];
    return (
        <div>
            <Grid direction="row" container>-
                <Grid item xs={6} style={useStyle.root}>
                    <h4 style={useStyle.forntStyle}>Employee ID :</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4>Emp1</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4 style={useStyle.forntStyle}>Name :</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4>SGIC</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4 style={useStyle.forntStyle}>Designation :</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4>Software Engineer</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <h4 style={useStyle.forntStyle}>Select Role :</h4>
                </Grid>
                <Grid item xs={6} style={useStyle.root}>
                    <AutoComplete
                        style={{ width: 'auto' }}
                        dataSource={dataSource}
                        placeholder="Select One Role"
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default EditRole
