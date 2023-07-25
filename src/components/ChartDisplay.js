import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

import { GetUserData } from '../services/dataService';


const DisplayChart =async({data})=>{
    
    //console.log("ddata",data[0],data[1]);
    //do backend request or call function that does it
    //get data
    //format it into usuable data here
    //create data structure for line graph here.
    //render graph.
    const rawvalues= GetUserData(data);
    console.log("rawvalues",rawvalues);
    const val = await rawvalues.map(x=>console.log(x.value))
    return (
        <a>a</a>
    )
}

export default DisplayChart