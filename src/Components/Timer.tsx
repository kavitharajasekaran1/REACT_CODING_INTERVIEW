import { useState } from "react";


declare const window: any;




const Timer = () =>{
    const [seconds, setSeconds] = useState<number>(0)
    const start = () =>{
        window.myTimer = setInterval(()=>{
            setSeconds(seconds => seconds +1)
        },100)
    }

    const stop = () =>{
        clearInterval(window.myTimer);

    }

    const reset = ()=>{
        clearInterval(window.myTimer);
        setSeconds(0)
    }


    return (
        <>
        <div>
            <p>{Math.trunc(seconds/60)} - Seconds</p>
            <p>{seconds%60} - Minutes</p>
        </div>
<button type="button" className="btn btn-success" onClick={()=> start()}>start</button>
<button type="button" className="btn btn-danger" onClick={()=> stop()}>stop</button>
<button type="button" className="btn btn-info" onClick={()=>reset() }>Reset</button>

        </>
    )
}

export default Timer;