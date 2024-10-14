import {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';
import './ResultModel.css'

const ResultModel=  forwardRef(function({targetTime,remainingTime,onSelect},ref){
    const isWon = remainingTime > 0;
    const dialog = useRef();
    const score = Math.round((1 - (remainingTime/(targetTime*1000)))*100);
    const msg = 'YOU LOST :('
    useImperativeHandle(ref,()=>{
        return {
            open : ()=>{
                return dialog.current.showModal();
            }
        }
    })

    return (
        <>
        <dialog ref={dialog} className="dialogContainer" onClose={onSelect}>
        <div className="dialogminiContainer">
        {isWon ? <p>SCORE : {score}</p> : undefined}
        {!isWon ? <p>{msg}</p> : undefined}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with  <strong>{remainingTime/1000} seconds left.</strong></p>
        <form method="dialog" onSubmit={onSelect}>
            <button>close</button>
        </form>
        </div>
        </dialog>
        </>
        // , document.getElementById('model')
    )
})

export default ResultModel;