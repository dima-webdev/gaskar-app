import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useModal } from 'react-modal-hook';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';

import CardProject from "./CardProject";
import ProjectForm from "./ProjectForm";

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    const [showCreateModal, hideCreateModal] = useModal((
        ({ in: open, onExited }) => (
            <ProjectForm
                open={open}
                onExited={onExited}
                onClose={hideCreateModal}
            />
        )
    ));

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    <Box px={2} py={5} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" className={classes.tabHeading}>{children}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={showCreateModal}
                        >
                            Добавить {children}
                        </Button>
                    </Box>
                    <Box px={2} display="flex" justifyContent="flex-end">
                        <AppsIcon />
                        <MenuIcon />
                    </Box>
                    <Box px={2} py={5} display="flex">
                        <CardProject />
                    </Box>
                </>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
    },
    button: {
        background: '#6a1b9a',
        color: '#fff',
    },
    tabs: {
        borderBottom: '1px solid #e3e3e3',
    },
    tabHeading: {
        textTransform: 'uppercase',
    }
}));

export default function TabsPanel() {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (evemt, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs}>
                <Tab label="Список проектов" {...a11yProps(0)} />
                <Tab label="Дорожные карты" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
                Список проектов
            </TabPanel>
            <TabPanel value={value} index={1}>
                Дорожные карты
            </TabPanel>
        </div>
    );
};