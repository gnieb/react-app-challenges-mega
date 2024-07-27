import { useState, } from "react";
import { useEffect } from "react";


export const StopWatch = () => {

    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false)


    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId =  setInterval(() => setTime(time+1), 10);
        }

    return () => clearInterval(intervalId);
    
}, [isRunning, time])

// come back to these......


    const hours = Math.floor(time / 360000)
    const mins = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const millis = Math.floor(time % 100)
    

    const handleStartandStop = () => setIsRunning(!isRunning)
    const handleReset = () =>  {
        // setIsRunning(false)
        setTime(0) 
    }


    return (

       <div>
        <div onClick={handleReset}>Reset</div>
        <div onClick={handleStartandStop} >{ isRunning? `STOP` : `START`}</div>
        <div>{hours} hours</div>
        <div>{mins} minutes</div>
        <div>{seconds} seconds</div>
        <div>{millis} milliseconds</div>
    </div> 
    )
    
};

