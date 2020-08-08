import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import CardProject from "./CardProject";

const mapStateToProps = state => {
    const projects = state.projects;
    return projects;
};

const CardProjectList = ({ projects }) => {
    return (
        <Grid container spacing={4}>
            {
                projects.length ? projects.map(item => {
                    return (
                        <Grid item lg={3} key={item.id}>
                            <CardProject project={item} />
                        </Grid>
                    );
                }) : (
                    <div>No projects yet...</div>
                )
            }
        </Grid>
    );
};

export default connect(mapStateToProps, null)(CardProjectList);