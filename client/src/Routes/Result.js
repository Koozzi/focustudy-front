import React, { useLayoutEffect } from 'react'
import { Container, Grid, CardMedia, Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import initTimer from '../script/Timer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Result() {
  const classes = useStyles();
  useLayoutEffect(() => {
    initTimer();
  }, []);
  return (
    <Container maxwidth="sm">
      <Grid container spacing={5}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <video poster="https://kr.object.ncloudstorage.com/resume/fifth_season_face.png" controls="controls" width="480px">
              <source src="https://kr.object.ncloudstorage.com/resume/1min_fifth2.m4v"></source>
            </video>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <video poster="https://kr.object.ncloudstorage.com/resume/wannabe_thumb.png" controls="controls" width="480px">
              <source src="https://kr.object.ncloudstorage.com/resume/1min_output_wanna.m4v"></source>
            </video>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Result;