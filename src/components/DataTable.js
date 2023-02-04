import { Table } from "react-bootstrap";



const TableDisplay = ({TableData})=>{

    const Printvalue = (value)=>{
        console.log(value[0],value[1]);
    }
    const SaveUserData = (TableData)=>{
        {Object.entries(TableData).map((stat)=>{
            console.log(stat[0],stat[1]);
        })}
    }
    return (
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Statistics
                        </th>
                        <th colSpan={2}>
                            Value:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(TableData).map((key,value) => {
                      return(
                        <tr>
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
                                <button onClick={()=>Printvalue(key)}>
                                    Click to Save
                                </button>
                            </td>
                        </tr>
                    )})}
                    <tr>
                        <td colSpan={4}>
                            <button onClick={()=>SaveUserData(TableData)}>
                                Save All Data
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
    )
}
export default TableDisplay