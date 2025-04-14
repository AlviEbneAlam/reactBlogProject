import React, {useState, useEffect} from "react";


const Timer=()=>{

    const[seconds,setSeconds]= useState(0);

    useEffect(
        ()=>{
            console.log("Setting interval.....");

            const interval= setInterval(
                () =>{
                    setSeconds((prev)=>prev+1);
                }, 1000
            );

            return ()=>{
                console.log("Clearing interval.....");
                clearInterval(interval);
            };
        }, []
    );

    return <p>Seconds elapsed: {seconds}</p>;
};

export default Timer;