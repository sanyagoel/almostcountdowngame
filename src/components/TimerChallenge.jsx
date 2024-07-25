import './TimerChallenge.css'
import Resultmodel from './ResultModel';

import { useState,useRef } from 'react'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const [timerStarted,setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const dialog = useRef();

    function handleStart(){
       timer.current =  setTimeout(()=>{
            // setTimerExpired(true);
            setTimerStarted(false);
            dialog.current.open();
        },targetTime*1000)
        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
        setTimerStarted(false);
        // setTimerExpired(false);
    }


    return (<>        
    <Resultmodel ref={dialog} targetTime={targetTime} result="LOST"/>
        <div className="challengeContainer">

            <div className="boxContainer">
                <p>{title}</p>
                <p>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p><button onClick={!timerStarted ? handleStart : handleStop}>{timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
                <p className={timerStarted ? 'active' : undefined}>{!timerStarted ? 'Timer is inactive.' : 'Timer is running..'}</p>
            </div>
        </div>
        </>
    )
}
