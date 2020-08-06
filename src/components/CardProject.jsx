import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import ImageAvatars from "./ImageAvatars";

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 345,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    media: {
        height: 140,
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export default function CardProject() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://stmegi.com/upload/iblock/d12/d1224be2b354b549cb3cafebfc2a7b07.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Терапевтический курс
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <div className={classes.list}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <CalendarTodayOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="08.04.2019 - 31.01.2021 гг."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                       <PersonOutlineOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Денис Конев"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EuroOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Гросолим Лимитед" />
                                </ListItem>
                            </List>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cards}>
                <ImageAvatars />
                <CircularProgress color="secondary" />
            </CardActions>
        </Card>
    );
};