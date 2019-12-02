import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

const EditRole = ({ data, editRole, functionRefresh }) => {
    const useStyle = {
        forntStyle: {
            fontWeight: 900
        },
        root: {
            padding: '5px',
            textAlign: 'center',
        }
    }
    const [role, setRole] = useState({
        role: '',
        employeeID: '',
        employeeName: '',
        key: ''

    })
    const handleChange = (e) => {
        setRole({
            role: e.target.value,
            employeeID: document.getElementById('employeeID').value,
            employeeName: document.getElementById('employeeName').value,
            key: document.getElementById('key').value

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        editRole(role)
        functionRefresh()
    }
    return (
        <div>
            {data.map((data, key) => {
                return (
                    <form key={key} onSubmit={handleSubmit}>
                        <Grid direction="row" container>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Employee ID :</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <input type="hidden" id="key" value={data.key} />
                                <input type="text" value={data.employeeID} readonly="readonly" name="employeeID" id="employeeID" />
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <span style={useStyle.forntStyle}>Name :</span>
                            </Grid>
                            <Grid item xs={6} style={useStyle.root}>
                                <input type="text" value={data.employeeName} readonly="readonly" id="employeeName" />
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
                                <select class="ui fluid dropdown" onChange={handleChange}
                                    value={role.role}>
                                    <option >-----Select------</option>
                                    <option value="ASE">ASE</option>
                                    <option value="SE">SE</option>
                                    <option value="SSE">SSE</option>
                                    <option value="ATL">ATL</option>
                                    <option value="TL">TL</option>
                                    <option value="STL">STL</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} style={useStyle.root}  >
                                <button type="submit"  >Save Data</button>
                            </Grid>
                        </Grid>
                    </form>
                )
            })}

        </div>
    )
}

export default EditRole
