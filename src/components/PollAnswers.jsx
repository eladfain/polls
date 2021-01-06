import React, {useState } from 'react';
import TextField from '@material-ui/core/TextField';
function PollAnswers({answersRef}){
    const [ansNum,setAnsNum]=useState(3);
    const answersInputList=[];
    const onLastChange=(e)=>{
        setAnsNum(ansNum+1)
    }
    for(let i=0;i<ansNum;i++){
        answersInputList.push(<div key={i}><TextField label={"option"+(i+1)} onChange={(i===ansNum-1)?onLastChange:null}></TextField></div>)
    }
    return(
        <div ref={answersRef}>
            {answersInputList}
        </div>
    )

}


export default PollAnswers;