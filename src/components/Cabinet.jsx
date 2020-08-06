import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from '@material-ui/core/colors';
import Box from "@material-ui/core/Box";

import SideBar from "./SideBar";
import TabsPanel from "./TabsPanel";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        padding: 13,
        backgroundColor: '#e3e3e3',
        alignItems: 'flex-end',
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    typography: {
        textTransform: 'uppercase',
        color: '#4a148c',
        letterSpacing: '0.1em',
    },
}));

const Cabinet = () => {
    const classes = useStyles();

    return (
       <div className={classes.root}>
           <CssBaseline />
           <AppBar position="fixed" className={classes.appBar}>
               <Avatar className={classes.orange}>N</Avatar>
           </AppBar>
           <SideBar />
           <main className={classes.content}>
               <div className={classes.toolbar} />
               <Typography variant="h4" className={classes.typography}>
                   Проекты
               </Typography>
               <Box component="div" my={2}>
                   <TabsPanel />
               </Box>
           </main>
       </div>
    );
}

export default Cabinet;