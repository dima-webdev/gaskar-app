import React from 'react';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const drawerWidth = '300px';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#4a148c",
    },
    toolbar: theme.mixins.toolbar,
    listItems: {
        color: "#fff",
    },
}));

const SideBar = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Задачи и работы', 'Проекты', 'Календарь', 'Возможности'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><ViewModuleIcon /></ListItemIcon>
                        <ListItemText
                            primary={text}
                            className={classes.listItems}
                        />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}

export default SideBar;