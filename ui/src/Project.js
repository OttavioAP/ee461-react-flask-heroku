import React from 'react';
import './index.css';
import {Button, Stack} from "@mui/material";
import {HWSet} from "./HWSet";


export class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joined: props.joined
        }
    }
    //@app.route('/leaveProject/<projectid>')
    leaveComm() {
        fetch('/leaveProject/${this.props.ID}').then(response => 
            response.json()).then(
                (result) => {
            const data = this.result.text;
    
        //    console.log(data)
    }
        )
    }
     
  //start from scratch, write function that connects front end to backend
            
    
//async function?

/*
change response.json to response.data
*/


    render() {
        return(
            <div className={this.state.joined ? "joined-project" : "joinable-project"}>
                <Stack direction="row" spacing={4} alignItems="center">
                    <p>{this.props.name}</p>
                    <p>list, of, authorized, users</p>
                    <Stack spacing={1}>
                        <HWSet current={this.props.initial} ID = {this.props.ID} />
                        <HWSet current={this.props.initial} ID = {this.props.ID} />
                    </Stack>
                    <Button onClick={() => this.toggleState()}>leave </Button>
                     {/* <Button onClick={() => this.toggleState()}>{this.state.joined ? "Leave" : "Join"}</Button>  */}
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

        if(this.state.joined){
           /// alert(this.props.ID);
            //backend comm here
           this.leaveComm()
           alert("Leaving " + this.props.ID)




        }

        if(!this.state.joined){
     /// alert(this.props.ID);
     alert("Joining " + this.props.ID)
     


        }
    

        
    }

 myAlert() {
}

}

