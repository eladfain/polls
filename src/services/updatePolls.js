function updatePolls(poll,id){
    const pollsStr=JSON.stringify(poll);
    localStorage.setItem("polls-"+id,pollsStr);
}

export default updatePolls;