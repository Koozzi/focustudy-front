import React from 'react';
import Axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0.2),
    },
    paper: {
        marginTop: 2,
        '&:hover':{
            // cursor: 'pointer'
        }
    }
}));

function Dashborad_Social_Reqeust( { request, displayName } ) {
    const classes = useStyles();

    const RefreshPage = () => {
        window.location.reload(false);
    }

    const DeleteMessage = async(index, message, e) => {
        await Axios.post(
            "https://focustudy-back.site/social/delete_message",
            {
                rUser: displayName,
                sUser: message.sender
            }
        )
        RefreshPage();
    }

    const AddFriend = async(index, message, e) => {
        await Axios.post(
            "https://focustudy-back.site/social/addfriend",
            {
                rUser: displayName,
                sUser: message.sender
            }
        )
        RefreshPage();
    }

    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
            {request.map((message, index) => {
                return(
                    <div key={index}>
                        {message.accept || message.deleted ? (
                            <div></div>
                        ) : (
                        <div>
                            <span>{message.sender}님으로부터 친구요청 메세지가 도착했습니다.</span>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<SaveIcon />}
                                className={classes.button}
                                onClick={e => AddFriend(index, message, e)}
                            >
                                수락
                            </Button>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                size="small"
                                onClick={e => DeleteMessage(index, message, e)}
                            >
                                삭제
                            </Button>
                        </div>
                        )}
                    </div>
                )
            })}
            </Paper>
        </div>
    )
}

export default Dashborad_Social_Reqeust
