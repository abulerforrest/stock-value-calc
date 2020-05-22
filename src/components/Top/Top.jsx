import React, { useContext } from 'react';

import {
    Menu,
    Badge,
    AppBar,
    Toolbar,
    MenuItem,
    IconButton,
    makeStyles
} from "@material-ui/core";

import clsx from 'clsx';

import {
    Menu as MenuIcon,
    Mail as MailIcon,
    MoreVert as MoreIcon,
    Notifications as NotificationsIcon,
    AccountCircle
} from '@material-ui/icons';

import { StoreContext } from '../../context/store/store';

export const Top = props => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundImage: 'linear-gradient(to right top, #f7f4e9, #f4f1e6, #f1eee3, #efece1, #ece9de, #efe9e0, #f2e9e2, #f4eae5, #f8eeee, #f9f4f5, #fbf9fb, #fefefe)',
            boxShadow: 'none',
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${props.drawerWidth}px)`,
            marginLeft: props.drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        },
            toolbar: {
            display: 'flex'
        },
    }));

    const classes = useStyles();

    const {
        drawer
    } = useContext(StoreContext);

    const handleDrawerOpen = () => {
        drawer.setOpenDrawer(true);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky" className={clsx(classes.appBar, {
            [classes.appBarShift]: drawer.openDrawer,
        })}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="secondary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="primary">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="primary">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={null}
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="primary"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={null}
                    aria-haspopup="true"
                    onClick={null}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
    );

}