import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import './DataTable.css';
import { SaveUserData } from "../services/dataService";
import DisplayChart from "./ChartDisplay";

const TableDisplay = ({TableData,Currentuser})=>{
    let logged = useSelector(state=>state.LoggedIn.loggedIn)
    let Displayname = useSelector(state=>state.DisplayUsername.name);
    console.log("Currentname",Currentuser);
    console.log("Displayusername",Displayname);
    //this will save the user data at this point in time for that specific time.
    const Savevalue = async(value)=>{
        const Saved= await SaveUserData(value);
        console.log({Saved});

    }
    //this will be used to get individual stat data based on the type of graphed selected.
    let length = (logged && (Displayname==Currentuser))?1:4;
    return (
        <>
        <Table striped bordered hover variant="dark" className="table" style={{marginBottom: 0+'px'}} >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Statistics
                        </th>
                        <th colSpan={length}>
                            Value:
                        </th>
                        {(logged && (Displayname==Currentuser))?<th>Save:</th>:null}
                        {(logged && (Displayname==Currentuser))?<th>Graph:</th>:null}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(TableData).map((key,value) => {
                        let identity = key[0].toString().replace(/\s/g,'');
                      return(
                        <>
                            <tr key={value}>
                                <td>
                                    {value}
                                </td>
                                <td>
                                    {key[0]}
                                </td>
                                <td>
                                    {key[1]}
                                </td>
                                {(logged && (Displayname==Currentuser))?<td><button className="btn btn-dark" onClick={()=>Savevalue(key)}>Click to Save</button></td>:null} 
                                {(logged && (Displayname==Currentuser))?<td><button className="btn btn-dark" type="button" data-bs-target={`#${identity}`} data-bs-toggle="collapse" aria-controls={`${identity}`} aria-expanded="false">Graph Data</button></td>:null}
                                
                            </tr>
                            <tr className="collapse out" id = {`${identity}`} colSpan="6">
                                <td colSpan={6}>
                                        
                                        <DisplayChart data={[Currentuser,key[0]]}/>
                                </td>
                            </tr>
                        </>
                    )})}
                    </tbody>
            </Table>
        </>
    )
}
export default TableDisplay