import { useState } from "react";


export const stopWatch = () => {

    const [time, setTime] = useState(0);

    const startTimer = () => {
        setInterval(
            setTime((time) => time + 1 )
       , 1000 )
    }


    const stopTimer = () => {
        setTime((time) => clearInterval())
    }

    <div>
        <div onClick={startTimer}>START</div>
        <div onClick={stopTimer} >STOP</div>
        <div>`${time / 60} minutes`</div>
        <div>`{time} seconds`</div>
    </div>
};

