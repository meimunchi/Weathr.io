import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText, Typography } from '@material-ui/core';
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

export default function SimpleModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleOpen}> Show Menu</Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DialogTitle id="alert-dialog-title"> Use the <b>commands</b> below:</DialogTitle>
                <DialogContent>
                    <Typography id="alert-dialog-description">
                        <b>menu</b> to display all available commands<br></br>
                        <b>descr</b> to provide a general weather description<br></br>
                        <b>humidity, cloudy,</b> or <b>wind</b> to provide their respective weather information
                </Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="inherit"> Exit Menu </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
