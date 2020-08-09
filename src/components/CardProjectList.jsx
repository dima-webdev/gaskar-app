import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import CardProject from "./CardProject";

const CardProjectList = ({ projects }) => {
    return (
        <Grid container spacing={4}>
            {
                projects.length ? projects.map(item => {
                    return (
                        <Grid item md={12} lg={3} key={item.id}>
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

const mapStateToProps = state => {
    const projects = state.projects;
    return projects;
};

export default connect(mapStateToProps, null)(CardProjectList);