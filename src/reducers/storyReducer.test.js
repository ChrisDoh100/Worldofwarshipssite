import storyReducer from './storyReducer'
import deepFreeze from 'deep-freeze'


describe('storyReducer',()=>{
    test('This should return A new state from the reducer ',()=>{
        const state= {1:"initial state"}
        const action = {
            type:'NEW STORY',
            data:{
                1:"this should be the new state",
            }
        }

        deepFreeze(state)
        const newState = storyReducer(state,action);
        console.log(action.data)
        expect(newState[1]).toEqual(
            "this should be the new state"
        )
    })
})