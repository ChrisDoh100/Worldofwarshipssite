import axios from "axios";
import { getPlayerNames , getPlayerData } from "./submission";

//jest.mock('axios')


describe('Get player Info',()=>{

    test('Sucessful Player Name Call', async ()=>{
        const name = await getPlayerNames("thedarkcalling")
        console.log(name.data.data[0].nickname)
        expect(name.data.data[0].nickname).toEqual("TheDarkCalling");
    })

    test('Successful Player Data Call', async ()=>{
        const accountid = 548561619;
        let Playerdata = await getPlayerData(accountid);
        let TruePlayerData = Playerdata.data.data[accountid].statistics;
        expect(TruePlayerData).toEqual(expect.objectContaining({
            distance:expect.any(Number),
            battles:expect.any(Number),
            pvp:expect.any(Object)
        }))

    })
})


