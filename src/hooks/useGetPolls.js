import  {useState,useEffect } from 'react';

function useGetPoll(id){
    const [poll,setPoll]=useState();
    
    useEffect(()=>{
        const poll=JSON.parse(localStorage.getItem('polls-'+id));
        setPoll(poll);
    },[id]);
    return poll;
}


export {
    useGetPoll
} ;