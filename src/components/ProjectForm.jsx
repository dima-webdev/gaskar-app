import React, {useCallback} from 'react';
import { Button, Dialog, DialogActions, DialogTitle, DialogContent, TextField, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const ProjectFrom = ({open, onExited, onClose}) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const handleSubmit = useCallback(e => {
        e.preventDefault();
    }, []);

    return (
        <Dialog open={open} onExited={onExited} onClose={onClose} fullWidth={true} >
            <form onSubmit={handleSubmit}>
                <DialogTitle>Добавить проект</DialogTitle>
                <DialogContent>
                    <TextField required label="Название проекта" fullWidth />
                    <Grid container className={classes.paper} spacing={5}>
                        <Grid item>
                            <TextField
                                id="date-begin"
                                type="date"
                                label="Начало"
                                defaultValue="2020-08-06"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="date-end"
                                type="date"
                                label="Конец"
                                defaultValue="2020-08-07"
                            />
                        </Grid>
                    </Grid>
                    <TextField required label="Руководитель проекта" fullWidth />
                    <TextField required label="Администратор проекта" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Загрузить</Button>
                    <Button onClick={onClose}>Отмена</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default ProjectFrom;