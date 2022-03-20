//Basic reducer to handle state changes when they're imported from the database.
const InitialState = {
    1:"Initial Story"
}

const storyReducer = (state=InitialState,action)=>{
    switch (action.type){
        case 'NEW STORY':{
            console.log(action)
            return {...state,...action.data};
        }
        default:{
            return state
        }

    }
}

export const setStory = (content)=>{
    return {
        type:'NEW STORY',
        data:{
            1:content
        }
    }
}
export default storyReducer
