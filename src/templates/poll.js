function createPollObj(id,question,answers,currentUserAnswerd){
    return{
        id:id,
        question:question,
        answers:answers,
        currentUserAnswerd:currentUserAnswerd
    }
}

function createNewPollObj(question,answers){
    const id=encodeURI(question)
    const answersObj={};
    for(let i in answers){
        answersObj[answers[i]]=0
    }
    return createPollObj(id,question,answersObj,null);
}
export {
    createPollObj,
    createNewPollObj
} ;