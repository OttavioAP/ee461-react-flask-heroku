import React from 'react';
import './index.css';
import {Button, Stack, TextField} from "@mui/material";

export class HWSet extends React.Component {
    render() {
        return (
            <Stack spacing={2} direction="row">
                <p>HWSet{this.props.id}: {this.props.current != null ? this.props.current : 0}/{this.props.capacity != null ? this.props.capacity : 100}</p>
                <TextField label="Enter qty" />
                <Button>Check in</Button>
                <Button>Check out</Button>
            </Stack>
        );
    }
}