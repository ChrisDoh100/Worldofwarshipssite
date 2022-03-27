import React, { useEffect } from 'react';
import { getStory } from '../HelperFiles/getStory';
import { setStory } from '../reducers/storyReducer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { DataFilter, DataAligner } from '../HelperFiles/Datafilter';
import './DataPage.css';
import Header from './Header';

const DataDisplay= () => {
    //creating states for all relevent data to display.
    const dispatch = useDispatch();
    const [title,setTitle]=useState(' ');
    const [titlevalue,setTitlevalue] = useState('Pick A Stat!');
    const [storytitle,setStorytitle] = useState(' ');
    const [storycontent,setStorycontent] = useState(' ');
    const [truepadding,setTruePadding] = useState(220);
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
    return(
        <>
            <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
            <div className="leftmenu" id="sidenav">
                <div id="leftmenuinner" className="leftmenuinner" style={{ 'paddingTop':truepadding+'px' }}>
                    <div className="leftmenuinnerinner">
                        <h2>Statistics:</h2>
                        {Object.keys(FilteredData).map(value => <p className="left" tabIndex={'1'} onClick={() => Clicked(value)} key={value} >{value}</p>)}
                    </div>
                </div>
            </div>
            <div className="playerdata">
                <h1 className="titlecontent">{title}&nbsp;&nbsp;{titlevalue}</h1>
                <h3 className="storytitle">{storytitle}</h3>
                <p className="pcontent">{storycontent}</p>
            </div>
        </>
    );
};

export default DataDisplay;