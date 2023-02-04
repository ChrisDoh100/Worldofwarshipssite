import React from 'react';
import './DataPage.css';
import Header from './Header';
import TableDisplay from './DataTable';
import { useLocation } from 'react-router-dom';
import { DataAligner, DataFilter } from '../HelperFiles/Datafilter';

const DataDisplay= () => {
    const {state} = useLocation();
    let data= state;
    let name = data.name;
    let FilteredData = DataAligner(DataFilter(data.data));
    return(
        <>
            <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
            <TableDisplay TableData={FilteredData}/>
            
        </>
    );
};

export default DataDisplay;