import React from 'react'
import { Grid } from '@material-ui/core'
import { AutoComplete } from 'antd'

const EditRole = ({ data }) => {
    const useStyle = {
        forntStyle: {
            fontWeight: 900
        },
        root: {
            padding: '5px',
            textAlign: 'center',
        }
    }
    const dataSource = ['Teach Lead', 'QA Lead', 'Software Engineer', 'Senior Software Engineer'];
    console.log(data)
    return (
        <div>
            {data.map((data, key) => {
                return (
                    <form key={key}>
                        <Grid direction="row" container>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Employee ID :</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <input type="text" value={data.employeeID} disabled="false" />
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Name :</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <input type="text" value={data.employeeName} disabled="false" />
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Designation :</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                {/* <input type="text" value={data.employeeDesignation} disabled="false"/> */}
                                <span style={useStyle.forntStyle}>{data.employeeDesignation}</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Select Role :</span>
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
                            <Grid item xs={12} style={useStyle.root}  >
                                <button type="submit" >Save Data</button>
                            </Grid>
                        </Grid>
                    </form>
                )
            })}

        </div>
    )
}

export default EditRole
