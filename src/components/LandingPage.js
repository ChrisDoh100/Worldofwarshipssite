import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LandingPage.css';
import { getPlayerNames , getPlayerData } from '../services/submission';
import { Alert } from 'bootstrap';


const LandingPage=() => {
    let history = useNavigate();
    //suggestions are whats returned from the worldofwarships api on the initial query of usernames.
    const [suggestions,setSuggestions]=useState([]);



    //handling when a username is submitted.
    const handleSubmit=async(username) => {
        let data =await getPlayerData(username['account_id'])
            .then(res => res.data.data[username['account_id']].statistics)
            .catch( err => Alert('Apologies, Please Try Again Later!'));
        let name = String(username['nickname']);
        history(`/data/${name}`,{ state:{ data,name } });
    };
    //handles when a letter is type, a single call for every letter typed.
    const handleEvent=async(event) => {
        event.preventDefault();
        let account_id =await getPlayerNames(event.target.value)
            .then(res => res.data.data)
            .catch(err => Alert('Apologies, Please Try Again Later!'));
        //checking if the returned data actually contains any users, if not we don't suggest any.
        if(typeof account_id==='undefined'){
            setTimeout(() => {
                setSuggestions([]);
            },100);
        }else{
            setSuggestions(account_id.slice(0,5));
        }
    };
    return(
        <>
        <div className="containerauto">
            <Header DisplayLogin={true} DisplayRegisterPage={true}/>
            <h1 className="title"  styles={"font-size:8vw;"}>World of Warships Stats</h1>
            <div className="autocomplete">
                <input type='text/css' placeholder="Username...." onChange={(event) => handleEvent(event)} ></input>
                <ul>
                    {suggestions && suggestions.map((item,i) => <li key={i} onClick={() => handleSubmit(item)}>{item['nickname']}</li>)}
                </ul>
            </div>
            <p className="toptip"> Top Tip: Try not to let your ships HP hit zero, otherwise you&apos;ll die!</p>
        </div>
        </>
    );
};

export default LandingPage;