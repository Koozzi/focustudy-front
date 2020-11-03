import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import "./Room.css";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function Room({roomNumber, description}){
    const classes = useStyles();
return (
    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            title={roomNumber}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {roomNumber}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        
        <Link to={{pathname: `./room/${roomNumber}`, state:{roomNumber:roomNumber}}}><Button size="small" color="primary">Go</Button></Link>
        
        <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
    </Card>
    );
}

export default Room;