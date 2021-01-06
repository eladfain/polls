import React, {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {useGetPoll} from "../hooks/useGetPolls";
import PollCardAnswers from "./PollCardAnswers";
import updatePolls from "../services/updatePolls";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: "75%",
      display: "inline-block",
      "text-align": "center"
    },
    center: {
        "margin-top":"20px",
        "text-align": "center",
    }
  });

const PollCard=()=>{
    const [poll,setPoll]=useState();
    const [selection,setSelection]=useState("");
    const [showResualt,setShowResualts] =useState(false);
    const {id}=useParams();
    const classes = useStyles();
    const pollObj=useGetPoll(encodeURI(id));
    useEffect(()=>{
        setPoll(pollObj);
    })
    
    const {question,answers}={...poll};
    const vote=(e)=>{
        e.preventDefault();
        let newPoll={...poll}
        newPoll.answers[selection]=newPoll.answers[selection]+1;
        updatePolls(newPoll,newPoll.id);
        setPoll(newPoll);
        setShowResualts(true);
   }
   const handleRadioChange=e=>{
    setSelection(e.target.value);
   }
    return(
        <div className={classes.center}>
                <Card className={classes.root}>
                    <CardContent>
                                {
                            poll ? 
                        <><div><h3>Question: {question}</h3></div><div><PollCardAnswers showResualt={showResualt} handleRadioChange={handleRadioChange} vote={vote} answers={answers}/></div></>
                        :
                        <p>no polls found</p>
                        }
                    </CardContent>
            
                </Card>
        </div>
    )

}



export default PollCard;