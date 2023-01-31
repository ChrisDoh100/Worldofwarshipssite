import React, { useEffect } from 'react';
import { getStory } from '../HelperFiles/getStory';
import { setStory } from '../reducers/storyReducer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { DataFilter, DataAligner } from '../HelperFiles/Datafilter';
import './DataPage.css';
import Header from './Header';
import { Table } from 'react-bootstrap';

const DataDisplay= () => {
    //creating states for all relevent data to display.
    const dispatch = useDispatch();
    const [title,setTitle]=useState(' ');
    const [titlevalue,setTitlevalue] = useState('Pick A Stat!');
    const [storytitle,setStorytitle] = useState(' ');
    const [storycontent,setStorycontent] = useState(' ');
    const [truepadding,setTruePadding] = useState(220);
    const [first,setFirstValue] = useState(null);
    useEffect(async () => {
        //Pulling story from database on page load and setting the title and content
        try {
            const stories = await getStory();
            dispatch(setStory(stories.stories));
            setStorytitle(stories.title);
            setStorycontent(stories.stories);
        } catch (error) {
            console.log('Problem with Database pull');
            console.error(error);
        }
    },[dispatch]);
    //Getting state from userdata pushed from the initial api calls.
    const  { state }  = useLocation();
    let data = state;
    let name = state.name;
    let FilteredData=DataAligner(DataFilter(data.data));
    //functionality of the scroll bar when the entire site is being scrolled.
    window.addEventListener('scroll',() => {
        if((220-window.scrollY)<0){
            setTruePadding(0);
        }else{
            setTruePadding(220-window.scrollY);
        }
    });
    //click functionality that changes data displayed.
    const Clicked=(somevalue) => {
        setTitle(somevalue+':');
        setTitlevalue(FilteredData[somevalue]);
    };
    const Printvalue=(first)=>{
        console.log(first)
    }
    const SaveUserData=(UserData)=>{
        Object.entries(UserData).map((stat)=>{
            console.log(stat[0],stat[1])
        })
    }
    return(
        <>
            <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
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
                    {Object.entries(FilteredData).map((key,value) => {
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
                            <button onClick={()=>SaveUserData(FilteredData)}>
                                Save All Data
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            
        </>
    );
};

export default DataDisplay;