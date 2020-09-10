import React, { Component } from 'react';
import { Container} from '@material-ui/core';
import "./Listroom.css";
import Room from "../../Components/Room";


export default function SelectStudy() {
    const rooms = [1, 3, 5, 7, 9];
    return (
        <Container maxwidth="sm">
            <div className="row">
                <div className="rooms">
                    {rooms.map(room => (
                        <Room 
                            roomNumber={room}
                        />
                    ))}
                </div>
            </div>
            
        </Container>
        
    );
}