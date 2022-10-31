import React from 'react';
import './index.css';
import {Button, Stack, TextField} from "@mui/material";



export class HWSet extends React.Component {

      
    checkOutComm() {
        fetch('/checkOut_hardware/${this.props.quantity}').then(response => 
            response.json()).then(
                (result) => {
            const data = this.result.text;
    
        //    console.log(data)
    }
        )

        
    }

    checkInComm() {
        fetch('/checkOut_hardware/${this.props.quantity}').then(response => 
            response.json()).then(
                (result) => {
            const data = this.result.text;
    
        //    console.log(data)
    }
        )
    }

    handleChange = (e) => {
        console.log('Typed => ${e.target.value}')
        this.setState(
        {entered: e.target.value}

        )
    }

    constructor(props) {
        super(props);
        this.state = {
            quantity: props.current,
            entered: 0
        }
        
    }
   
    render() {
      
        return (

            <Stack spacing={2} direction="row">
                <p>HWSet{this.props.id}: {this.props.current != null ? this.props.current : 0}/{this.props.capacity != null ? this.props.capacity : 100}</p>
               
                <TextField 
                label="Enter qty" 
                onChange={this.handleChange}
                value = {this.state.entered}
                />
                <Button onClick={() => this.checkIn()}>Check in</Button>
                <Button onClick={() => this.checkOut()}>Check out</Button>
            </Stack>
        );
    }



    checkIn() {
        
        this.checkIn()
        alert("checking out "+ this.state.entered + " units for " +this.props.ID)
        
    
        }

    checkOut() {
       this.checkOut()
        alert("checking in "+ this.state.entered + " units for " +this.props.ID)
    }

}