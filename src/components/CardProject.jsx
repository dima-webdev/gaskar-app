import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';

import ImageAvatars from "./ImageAvatars";
import CardText from "./CardText";
import ListDetail from "./ListDetail";

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default function CardProject({ project }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}  component={CardText} />
                <CardContent>
                    <ListDetail list={project} />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cards}>
                <ImageAvatars />
                <CircularProgress variant="static" value={75} />
            </CardActions>
        </Card>
    );
};