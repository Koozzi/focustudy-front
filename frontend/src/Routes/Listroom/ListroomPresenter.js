import React from 'react';
import { Container} from '@material-ui/core';
import "./Listroom.css";
import Room from "../../Components/Room";


export default function SelectStudy() {
    const rooms = ["rmon1", "remon3", "remonvagegw", "awegwag", "waeasdg"];

    return (
        <Container maxwidth="sm">
            <div className="row">
                <div className="rooms">
                    {rooms.map(room => (
                        <Room 
                            roomNumber={room} key={room}
                        />
                    ))}
                </div>
            </div>
            
        </Container>
    );
}