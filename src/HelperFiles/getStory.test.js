import axios from "axios"
import { getStory } from "./getStory"
jest.mock('axios')


describe('getStory test',()=>{
    test('This should return a story',async ()=>{
            const story = "You're a dumbfuck"

            axios.get.mockResolvedValueOnce(story)

            const stories = await getStory();

            console.log({stories});
            console.log({story})
            expect(axios.get).toHaveBeenCalledWith(`http://localhost:3001/`);
            expect(stories).toEqual(story);
    })
})