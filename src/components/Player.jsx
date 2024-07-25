import './Player.css'
import { useState, useRef } from 'react'

export default function Player(props){
    const playerName = useRef();
    const [player,setPlayer] = useState(null);
    // function changePlayer(event){
    //     setSubmit(false)
    //     setPlayer(()=> event.target.value);
    // }

    function submitted(){
        console.log(playerName);
        setPlayer(playerName.current.value);
        playerName.current.value = '';
    }

    // function submitted(){
    //     const value = document.getElementById('input2').value;
    //     setPlayer(value);
    //     setSubmit(true);
    // }

    return (
        <>
        <div className='textContainer'>
        <span>THE <hel>ALMOST</hel> FINAL COUNTDOWN</span>
        <div className="texttimer">Stop the timer once you estimate that time is (almost) up </div>
        <div className="welcomeName">Welcome {player ? player : 'Entity'}</div>
        <div className="inputStyle">
        <input  ref={playerName} type="text"></input>
        <button onClick={submitted}>Set Name</button>
        </div>
        <div className="challengeWrapper">

        {props.children}
</div>
        </div>
       
        </>
    )
}