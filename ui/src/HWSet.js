import React from 'react';
import './index.css';
import {Button, Stack, TextField} from "@mui/material";
import { useState } from 'react';

export class HWSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.current
        }
    }

    render() {
        return (
            <Stack spacing={2} direction="row">
                <p>HWSet{this.props.id}: {this.props.current != null ? this.props.current : 0}/{this.props.capacity != null ? this.props.capacity : 100}</p>
                <TextField 
                label="Enter qty" 
                />
                <Button onClick={() => this.checkIn()}>Check in</Button>
                <Button onClick={() => this.checkOut()}>Check out</Button>
            </Stack>
        );
    }

/*
  <TextField
        value={name}
        label="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
       */
    getInput(){
        //ask evan for help here
    }


    checkIn() {
        alert("checking in " + this.state.quantity + this.props.ID)
    }

    checkOut() {
        alert("checking out " + this.state.quantity + this.props.ID)
    }

}