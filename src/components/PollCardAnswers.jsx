import React, { } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
const useStyles = makeStyles({
    flex: {
      display: "flex",
    },
    diagram: {
        height:"20px",
        width:"200px",
        "margin-left":"0"
    },
    button:{
        width:"50px",
        margin:"0 auto"
    },
    label:{
        "padding-right":"5px"
    }
  });
function PollCardAnswers({answers,vote,handleRadioChange,showResualt}){
   const totalVotes= Object.values(answers).reduce((a,b)=>a+b);
   const answersArr=[];
   const lineProgress=[];
   const noVotes=totalVotes===0;
   const classes = useStyles();
   Object.keys(answers).forEach(x=>{
        answersArr.push(
        <div key={x} className={classes.flex}>
            {
                showResualt?<span className={classes.label}>{x}</span>:<FormControlLabel value={x} label={x} control={<Radio color="default" />}/>
            }
         
            
                
        </div>
        )
        lineProgress.push(
            <div>
            {
                showResualt?(<div>
                    <Box className={classes.flex} alignItems="center">
                        <Box width="100%">
                            <LinearProgress className={classes.diagram} value={noVotes?0:(answers[x]/totalVotes)*100} variant="determinate"/>
                        </Box>
                        <Box>
                            {answers[x]}
                        </Box>
                         
                    </Box>
                  
                </div>):null
            }
            </div>
        )
   }
    )
    
    return(
        <>
            <form onSubmit={vote}>
                <FormControl>
                    <RadioGroup name="pollAnsweres"  onChange={handleRadioChange}>
                        <div className={classes.flex}>
                            <div>
                                  {answersArr}  
                            </div>
                            <div>
                                  {lineProgress}  
                            </div>
                             
                        </div>
                         
                    </RadioGroup>
                    {!showResualt?
                    (
                        <Button className={classes.button} type="submit" variant="outlined" color="primary">
                        Vote!
                        </Button>
                    ):<div><p>Total Votes:{totalVotes}</p><p>Thank you for taking our poll!</p></div> }
                </FormControl>
            </form>
            
        </>
       
    )
}

export default PollCardAnswers;
