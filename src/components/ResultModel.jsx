import {forwardRef, useImperativeHandle, useRef} from 'react';
import './ResultModel.css'

const ResultModel=  forwardRef(function({targetTime,result},ref){

    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return {
            open : ()=>{
                return dialog.current.showModal();
            }
        }
    })

    return (
        <>
        <dialog ref={dialog} className="dialogContainer">
        <div className="dialogminiContainer">
        <p> YOU {result} !!</p>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with  <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>close</button>
        </form>
        </div>
        </dialog>
        </>
    )
})

export default ResultModel;