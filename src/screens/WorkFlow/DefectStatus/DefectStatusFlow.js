import React from 'react';
import DefectStatusFlow from './Editor/GGEditor/DefectStatusFlow';
import { Grid } from '@material-ui/core';
import { Segment } from 'semantic-ui-react';
import BreadCrumbs from '../../../components/breadCrumbs/breadCrumbs'

class DefectStatusFlowComponent extends React.Component {

    render() {

        return (
            <React.Fragment>
                <div>
                    <Grid direction="row" container>
                        <Grid item xs={11} style={{ marginTop: '2%', height: 'auto' }}>
                            <Segment>
                                <BreadCrumbs />
                                <DefectStatusFlow />
                            </Segment>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>

        );
    }
}

export default DefectStatusFlowComponent;
