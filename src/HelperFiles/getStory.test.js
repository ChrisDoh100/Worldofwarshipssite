import axios from "axios"
import {getStory} from "./getStory"


describe('getStory test',()=>{
    test('This should return a story',async ()=>{
            const story = await getStory();
            expect(story).toEqual(expect.objectContaining({
                id:expect.any(Number),
                stories:expect.any(String),
                title:expect.any(String)
            }))
    })
})