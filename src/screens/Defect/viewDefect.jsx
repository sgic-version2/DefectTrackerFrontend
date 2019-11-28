import React, { useState } from 'react';
import Tables from '../../components/tables/table';
import { Button, Segment } from 'semantic-ui-react';
import { Grid } from '@material-ui/core';
import AddDefect from './addDefect';
import More from './more';
import EditDefect from './editDefect';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';

const ViewDefect = () => {
    const [open, setOpen] = useState({
        open: false,
        value: false
    });

    const handleOpen = () => {
        setOpen({
            open: true
        });
    };

    const handleClose = () => {
        setOpen({
            open: false
        });
    };

    const handleOpenmore = () => {
        setOpen({
            valueMore: true
        });
    };

    const handleClosemore = () => {
        setOpen({
            valueMore: false
        });
    };
    const handleOpenEdit = () => {
        setOpen({
            value: true
        });
    };

    const handleCloseEdit = () => {
        setOpen({
            value: false
        });
    };
    const columns = [
        {
            title: 'Defect Id',
            dataIndex: 'defectId',
            sortDirections: ['descend'],
            sorter: (a, b) => a.defectId - b.defectId,
        },
        {
            title: 'Module Name',
            dataIndex: 'moduleName',
            sortDirections: ['descend'],
            sorter: (a, b) => a.moduleName - b.moduleName,
        },
        {
            title: 'Severity',
            dataIndex: 'severity',
            filters: [
                {
                    text: 'Low',
                    value: 'low',
                },
                {
                    text: 'Medium',
                    value: 'medium',
                },
                {
                    text: 'Heigh',
                    value: 'heigh',
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.severity.indexOf(value) === 0,
            sorter: (a, b) => a.severity.length - b.severity.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            filters: [
                {
                    text: 'Low',
                    value: 'low',
                },
                {
                    text: 'Medium',
                    value: 'medium',
                },
                {
                    text: 'Heigh',
                    value: 'heigh',
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.priority.indexOf(value) === 0,
            sorter: (a, b) => a.priority.length - b.priority.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Type Id',
            dataIndex: 'typeId',
            filters: [
                {
                    text: 'UI',
                    value: 'ui',
                },
                {
                    text: 'Functional',
                    value: 'functional',
                },
                {
                    text: 'Enhancement',
                    value: 'enhancement',
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.typeId.indexOf(value) === 0,
            sorter: (a, b) => a.typeId.length - b.typeId.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Open',
                    value: 'open',
                },
                {
                    text: 'Close',
                    value: 'close',
                },
                {
                    text: 'InProgress',
                    value: 'inProgress',
                },
                {
                    text: 'Resolved',
                    value: 'resolved',
                },
                {
                    text: 'ReOpen',
                    value: 'reOpen',
                },
                {
                    text: 'Rejected',
                    value: 'rejected',
                },
                {
                    text: 'ReadyForTesting',
                    value: 'readyForTesting',
                },
                {
                    text: 'OnHold',
                    value: 'onHold',
                },

            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            sorter: (a, b) => a.status.length - b.status.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            defaultSortOrder: 'descend',
        },
        {
            title: 'More',
            dataIndex: 'more',
            defaultSortOrder: 'descend',
            //sorter: (a, b) => a.age - b.age,
        },
    ];

    const data = [
        {
            key: '1',
            defectId: 'D001',
            moduleName: 'Login',
            severity: 'Low',
            priority: 'Heigh',
            typeId: 'UI',
            status: 'reOpen',
            action: <Button.Group>
                <Button secondary onClick={handleOpenEdit}>Edit</Button>
                <Button.Or />
                <Button negative
                    onClick={() =>
                        window.confirm("Are you sure you want to delete this Defect? ") &&
                        this.deleteDefect()}>Delete
                </Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={handleOpenmore} />
        },
        {
            key: '2',
            defectId: 'D001',
            moduleName: 'Form',
            severity: 'Low',
            priority: 'Heigh',
            typeId: 'UI',
            status: 'reOpen',
            action: <Button.Group>
                <Button secondary onClick={handleOpenEdit}>Edit</Button>
                <Button.Or />
                <Button negative onClick={() =>
                    window.confirm("Are you sure you want to delete this Defect? ") &&
                    this.deleteDefect()}>Delete
                </Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={handleOpenmore} />

        },
        {
            key: '3',
            defectId: 'D001',
            moduleName: 'Table',
            severity: 'Low',
            priority: 'Heigh',
            typeId: 'UI',
            status: 'reOpen',
            action: <Button.Group>
                <Button secondary onClick={handleOpenEdit}>Edit</Button>
                <Button.Or />
                <Button negative onClick={() =>
                    window.confirm("Are you sure you want to delete this Defect? ") &&
                    this.deleteDefect()}>Delete
                </Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={handleOpenmore} />
        },
        {
            key: '4',
            defectId: 'D001',
            moduleName: 'Defect',
            severity: 'Low',
            priority: 'Heigh',
            typeId: 'UI',
            status: 'reOpen',
            action: <Button.Group>
                <Button secondary onClick={handleOpenEdit}>Edit</Button>
                <Button.Or />
                <Button negative onClick={() =>
                    window.confirm("Are you sure you want to delete this Defect? ") &&
                    this.deleteDefect()}>Delete
                </Button>
            </Button.Group>,
            more: <MoreOutlinedIcon onClick={handleOpenmore} />
        },
    ];

    return (
        <div>
            <Grid direction="row" container>
                <Grid item xs={11} style={{ marginTop: '2%' }}>
                    <Segment>
                        <AddDefect open={open.open} handleClose={handleClose} handleOpen={handleOpen} />
                        <Button color="primary" onClick={handleOpen}>AddDefect</Button>
                        <Tables column={columns} data={data} />
                        <EditDefect open={open.value} handleOpen={handleOpenEdit} handleClose={handleCloseEdit} />
                        <More open={open.valueMore} handleOpen={handleOpenmore} handleClose={handleClosemore} />
                    </Segment>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewDefect

