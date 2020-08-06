import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.small} />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.small} />
        </div>
    );
}