import React from 'react';
import DefectRolesFlow from './Editor/GGEditor/DefectRolesFlow';
import { Grid } from '@material-ui/core';
import { Segment } from 'semantic-ui-react';
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'

class DefectRolesFlowComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Grid direction="row" container>
                        <Grid direction="row" container>
                            <Grid item xs={11} style={{ marginTop: '2%', height: 'auto' }}>
                                <Segment>
                                    <BreadCrumbs />
                                    <DefectRolesFlow />
                                </Segment>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>

        );
    }
}

export default DefectRolesFlowComponent;
