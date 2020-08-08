import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ListItemText from "@material-ui/core/ListItemText";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import EuroOutlinedIcon from "@material-ui/icons/EuroOutlined";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    media: {
        height: 180,
    },
    icon: {
        minWidth: '35px',
    },
}));

const ListDetail = ({ list }) => {
    const classes = useStyles();
    const { title, begin, end, boss, admin } = list;
    return (
        <>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <Typography variant="body2" color="textSecondary" component="div">
                <div className={classes.list}>
                    <List>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <CalendarTodayOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${begin} - ${end}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <PersonOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={boss} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <EuroOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={admin} />
                        </ListItem>
                    </List>
                </div>
            </Typography>
        </>
    );
}

export default ListDetail;