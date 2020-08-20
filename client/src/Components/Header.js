import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
  

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    color: props => props.color,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Board() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap component={Link} to={"/"}>
                Pomodoro
            </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                <div id="timer">Pomodoro</div>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Our pomodoro Timer will make you happy!
            </Typography>
            
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}