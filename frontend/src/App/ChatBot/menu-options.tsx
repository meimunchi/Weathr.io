import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Menu options</h2>
            <p id="simple-modal-description">
                Use the <b>commands</b> below: <br></br>
                <b>menu</b> to display all available commands<br></br>
                <b>descr</b> to provide a general weather description<br></br>
                <b>humidity, cloudy,</b> or <b>wind</b> to provide their respective weather information<br></br>
            </p>
            <SimpleModal />
        </div>
    );

    // need to only 1 modal possible
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Menu
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    );
}
