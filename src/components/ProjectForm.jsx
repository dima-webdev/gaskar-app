import React, { useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { createProject } from "../redux/redux";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        createProject: (data) => dispatch(createProject(data)),
    };
}

const ProjectFrom = ({open, onExited, onClose, createProject}) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        const { title, begin, end, boss, admin } = e.target;
        const values = {
          title: title.value,
          begin: begin.value,
          end: end.value,
          boss: boss.value,
          admin: admin.value,
        };
        createProject(values);
        onClose();
    }, [onClose]);

    return (
        <Dialog open={open} onExited={onExited} onClose={onClose} fullWidth={true} >
            <form onSubmit={handleSubmit}>
                <DialogTitle>Добавить проект</DialogTitle>
                <DialogContent>
                    <TextField required label="Название проекта" name="title" fullWidth />
                    <Grid container className={classes.paper} spacing={5}>
                        <Grid item>
                            <TextField
                                name="begin"
                                type="date"
                                label="Начало"
                                defaultValue="2020-08-06"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="end"
                                type="date"
                                label="Конец"
                                defaultValue="2020-08-07"
                            />
                        </Grid>
                    </Grid>
                    <TextField required label="Руководитель проекта" name="boss" fullWidth />
                    <TextField required label="Администратор проекта" name="admin" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Загрузить</Button>
                    <Button onClick={onClose}>Отмена</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default connect(null, mapDispatchToProps)(ProjectFrom);