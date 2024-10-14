import './TimerChallenge.css'
import Resultmodel from './ResultModel';

import { useState,useRef } from 'react'
import { createPortal } from 'react-dom';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    // const [timerStarted,setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const [remainingTime,setremainingTime] = useState(targetTime*1000);
    const dialog = useRef();

    if(remainingTime<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    const timerStarted = remainingTime > 0 && remainingTime < targetTime*1000;

    function setRemaining(){
        setremainingTime(targetTime*1000);
    }

    function handleStart(){
       timer.current =  setInterval(()=>{
            // setTimerExpired(true);
            // setTimerStarted(false);
            // dialog.current.open();
            setremainingTime((previousTime)=>{
                return previousTime - 10;
            })
        },10)
        // setTimerStarted(true);
    }

    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();

        // setTimerStarted(false);
        // setTimerExpired(false);
    }


    return (<>     
       
    <Resultmodel ref={dialog} remainingTime={remainingTime} targetTime={targetTime} onSelect={setRemaining}/>
        <div className="challengeContainer">

            <div className="boxContainer">
                <p>{title}</p>
                <p>{targetTime} second{targetTime > 1 ? 's' : ''}</p>
                <p><button onClick={!timerStarted ? handleStart : handleStop}>{timerStarted ? 'Stop' : 'Start'} Challenge</button></p>
                <p className={timerStarted ? 'active' : undefined}>{!timerStarted ? 'Timer is inactive.' : 'Timer is running..'}</p>
            </div>
        </div>
        </>
        // , document.getElementById('model')
    )
}
