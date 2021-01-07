import React, {useRef,createRef } from 'react';
import TextField from '@material-ui/core/TextField';
import PollAnswers from "./PollAnswers";
import { useHistory } from "react-router-dom";
import {createNewPollObj} from "../templates/poll";
import updatePolls from "../services/updatePolls";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles({
    root: {
      maxWidth: "75%",
      margin:"0 auto"
    },
    center: {
        margin:"0 auto",
    }
  });

function CreatePoll(){
   const classes = useStyles();
   const answersRef=createRef();
   const questionRef=useRef();
   const history=useHistory();
   const submit=()=>{
        const answers=[...answersRef.current.querySelectorAll("input")].filter(e=>e.value.length>0).map(e=>e.value);
        const question=questionRef.current.querySelector("#question").value
        const newPoll=createNewPollObj(question,answers);
        updatePolls(newPoll,newPoll.id);
        history.push("poll/"+newPoll.id);
   }
   
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography align="center" variant="h4">Create a Poll</Typography>
                    <div>
                    <TextField id="question" ref={questionRef} label="Question:" variant="outlined" multiline fullWidth />
                    </div>
                    Choices:
                    <div>
                        <PollAnswers answersRef={answersRef}/>
                    </div>
                    <CardActions><Button  variant="contained" color="primary" endIcon={<AddIcon></AddIcon>} className={classes.center} onClick={submit}>Submit</Button></CardActions>
                </CardContent>
              
            </Card>
        </>
    )
}

export default CreatePoll;