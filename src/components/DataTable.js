import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import './DataTable.css'



const TableDisplay = ({TableData})=>{
    Object.entries(TableData).map((state)=>{

    })
    let logged = useSelector(state=>state.LoggedIn.loggedIn)
    const Printvalue = (value)=>{
        console.log(value[0],value[1]);
    }
    const SaveUserData = (TableData)=>{
        {Object.entries(TableData).map((stat)=>{
            console.log(stat[0],stat[1]);
        })}
    }
    let length = logged?1:4;
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
                        {logged?<th>Save:</th>:null}
                        {logged?<th>Graph:</th>:null}
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
                                <td>
                                    {logged?<button onClick={()=>Printvalue(key)}>
                                        Click to Save
                                    </button>:null} 
                                </td>
                                <td >
                                        {logged?<button type="button" data-bs-target={`#${identity}`} data-bs-toggle="collapse" aria-controls={`${identity}`} aria-expanded="false">Graph Data</button>:null}
                                </td>
                            </tr>
                            <tr className="collapse out" id = {`${identity}`} colSpan="6">
                                <td colSpan={6}>
                                        gimper
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