import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 600,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[20],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function ChatMenu() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleOpen} data-testid="menu-button"> Show Menu</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DialogTitle id="alert-dialog-title" data-testid="menu-title">Weathr.io Chat Menu</DialogTitle>
                <DialogContent>
                    <Typography id="alert-dialog-description">
                        Weathr.io chat is designed as a way to simulate chatting over SMS with +16204224617 when you're
                        without WiFi. Below are some of the possible commands<br/><br/>
                        <b>menu</b> to display all available commands<br/>
                        <b>tornado, earthquake, blizzard, wildfire, hurricane,</b> or <b>flood</b> to obtain some useful tips about each.<br/>
                        - Find out what to do <b>before, after,</b> or <b>during</b> these natural disaster<br/><br/>
                        Add <b>zip=XXXXXX</b> in order to identify your location for the following commands<br/>
                        - <b>descr</b> to provide a general weather description<br/>
                        - <b>humidity, cloudy,</b> or <b>wind</b> to provide their respective weather information<br/>
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="inherit"> Exit Menu </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
