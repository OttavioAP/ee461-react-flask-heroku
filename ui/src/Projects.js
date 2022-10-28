import React from 'react';
import './index.css';
import {Stack} from "@mui/material";
import {Project} from "./Project";

export class Projects extends React.Component {
    render() {
        return(
            <div>
                <h1>Projects</h1>
                <Stack spacing={1}>
                    <Project name={"Project Name 1"} ID={"ID1"} initial={50} />
                    <Project name={"Project Name 2"} ID={"ID2"} initial={50} joined={true} />
                    <Project name={"Project Name 3"} ID={"ID3"}/>
                </Stack>
            </div>
        );
    }
}