import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';
import logo from '../../assets/google.png'

const useStyles = makeStyles({
    outer: {
        height: 500,
        width: 400,
        fontFamily: 'roboto',
        fontWeight: 400
    },
    card: {
        width: '100%',
        height: 500,
        padding: "48px 40px 36px 40px"
    },
    grid: {
        height: '100vh'
    },
    tail: {
        marginTop: 10,
        color: '#757575'
    },
    tailLeft: {
        display: 'inline',
        color: '#202124',
        fontSize: '12px',
        verticalAlign: 'bottom'
    },
    tailRight: {
        float: "right",
        fontSize: '12px',
        fontWeight: 700
    },
    a: {
        textDecoration: 'none',
        color: '#757575'
    },
    textField: {
        width: '100%',
    },
    logo: {
        display: "block",
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 95,
        height: 40
    },
    button: {
        float: "right",
        background: "#1a73e8",
    },
    buttonLabel: {
        color: "#FFFFFF"
    },
    signin: {
        fontSize: 24
    },
    signinText: {
        textAlign: "center",
        padding: "25px"
    },
    blueLinks: {
        color: '#1a73e8',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '14px'
    }
})


const Component = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.signinText}>
                <div className={classes.signin} style={{ paddingBottom: 10 }}>Sign in</div>
                <div>to continue to Gmail</div>
            </div>
            <div>
                <TextField
                    id="outlined-basic"
                    className={classes.textField}
                    label="Email or phone"
                    margin="normal"
                    variant="outlined"
                    onChange={props.setEmail}
                    value={props.email}
                />
            </div>
            <div><a href="#" className={classes.blueLinks}>Forgot email?</a></div>
            <div style={{ height: "70px" }}></div>
            <div>Not your computer? Use a Private Window to sign in.</div>
            <div><a href="#" className={classes.blueLinks}>Learn more</a></div>
            <div style={{ height: "55px" }}></div>
            <div>
                <div><a href="#" className={classes.blueLinks} style={{ float: 'left' }}>Create Account</a></div>
                <Button variant="contained" onClick={props.next} className={classes.button} classes={{ root: classes.button, label: classes.buttonLabel }}>Next</Button>
            </div>
        </div>
    )
}


export default Component;