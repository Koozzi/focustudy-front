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
function Room({roomNumber}){
    const classes = useStyles();
    const image_urls = ["https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", 
    "https://images.unsplash.com/photo-1604376120598-e7ecbf34d6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80",
    "https://images.unsplash.com/photo-1508781197106-d8c535dcf276?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1497553586717-63b4928e6d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
    "https://images.unsplash.com/photo-1604251036494-6568bd88db5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1509665653475-295f17f738e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1417217601328-d3c66e6f1d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

];


var max = image_urls.length;
var idx = Math.floor(Math.random() * max); // 0 ~ (max - 1) 까지의 정수 값을 생성

return (
    <Link to={{pathname: `./room/${roomNumber}`, state:{roomNumber:roomNumber}}} style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image= {image_urls[idx]}
                title={roomNumber}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {roomNumber}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    방 설명이 들어가면 딱 맞을듯.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button size="small" color="primary">Go</Button>
            
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    </Link>
    );
}

export default Room;