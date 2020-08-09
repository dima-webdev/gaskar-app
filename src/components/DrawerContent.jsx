import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles';
import logoSidebar from "../images/logo-sidebar.png";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    item: {
        minWidth: 40,
    },
    listItemActive: {
        backgroundColor: "#24054b",
    },
    itemIconColor: {
        color: '#fff',
    }
}));

export const DrawerContent = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}>
                <img src={logoSidebar} alt="logo-sidebar" className="logo-sidebar" />
            </div>
            <List>
                {['Задачи и работы', 'Проекты', 'Календарь', 'Возможности'].map((text, index) => (
                    <ListItem button key={text} className={index === 1 ? `${classes.listItemActive}` : ''}>
                        <ListItemIcon><ViewModuleIcon classes={{ root: classes.itemIconColor }} /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}