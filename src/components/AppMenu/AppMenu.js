import React, { useContext } from 'react';

import {
    fade,
    List,
    Drawer,
    Divider,
    ListItem,
    IconButton,
    makeStyles,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";

import {
    Mail as MailIcon,
    Inbox as InboxIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';

import { StoreContext } from '../../context/store';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0,
        width: drawerWidth
    },
    drawerPaper: {
        color: '#fff',
        width: drawerWidth,
        backgroundColor: fade(theme.palette.common.black, 0.80)
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    }
}));

const AppMenu = () => {

    const classes = useStyles();
    const { drawer } = useContext(StoreContext);

    const handleDrawerClose = () => {
        drawer.setOpenDrawer(false);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={drawer.openDrawer}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose} color="secondary">
                    {classes.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
                <List>
                {['Historical records'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon >{index % 2 === 0 ? <InboxIcon color="secondary" /> : <MailIcon color="secondary" />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            <Divider />
        </Drawer>
    );
}

export default AppMenu;