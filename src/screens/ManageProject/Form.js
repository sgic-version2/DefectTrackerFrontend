import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import './Form.css';
import DatePick from './DatePick'

function Form() {
    const [data, setData] = useState({
        praject_name: "",
        type: "",
        duration: "",
        status: "",
        start_date: "",
        end_date: ""
    })
    const handleStartDateChange = date => {
        setData({ ...data, start_date: date })
        console.log(date)
    };
    const handleEndDateChange = date => {
        setData({ ...data, end_date: date })
        console.log(date)
    };
    const submitHandil = () => {
        console.log(data)

    }
    return (
        <div className="hello">
            <h3 >Add Project</h3><hr />
            <FormControl className="formControl">
                <InputLabel htmlFor="project_name">Project Name</InputLabel>
                <Input id="project_name" name="project_name" aria-describedby="my-helper-text" value={data.praject_name} onChange={(event) => setData({ ...data, praject_name: event.target.value })} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Input id="type" name="type" aria-describedby="my-helper-text" value={data.type} onChange={(event) => setData({ ...data, type: event.target.value })} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br />

            <FormControl>
                <InputLabel htmlFor="duration">Duration</InputLabel>
                <Input id="duration" name="duration" aria-describedby="my-helper-text" value={data.duration} onChange={(event) => setData({ ...data, duration: event.target.value })} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Input id="status" name="status" aria-describedby="my-helper-text" value={data.status} onChange={(event) => setData({ ...data, status: event.target.value })} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br />

            <DatePick name="Start Date" className="datePick" startDateHandil={handleStartDateChange} />

            <DatePick name="End Date" className="datePick" startDateHandil={handleEndDateChange} /><br />

            <Button variant="primary" type="submit" onClick={() => submitHandil()}>
                Submit
            </Button>
        </div>
    )
}

export default Form