import React from 'react';
import './index.css';
import {Button, Container, Stack} from "@mui/material";
import {HWSet} from "./HWSet";

export class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: props.joined
        }
    }

    render() {
        return(
            <div className={this.state.joined ? "joined-project" : "joinable-project"}>
                <Stack direction="row" spacing={4} alignItems="center">
                    <p>{this.props.name}</p>
                    <p>list, of, authorized, users</p>
                    <Stack spacing={1}>
                        <HWSet current={this.props.initial} />
                        <HWSet />
                    </Stack>
                    <Button onClick={() => this.toggleState()}>{this.state.joined ? "Leave" : "Join"}</Button>
                </Stack>
            </div>
        );
    }

    toggleState() {
        this.setState(
            {
                joined: !this.state.joined
            }
        )
    }
}