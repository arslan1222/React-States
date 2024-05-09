import { useState } from "react";

export default function Count(){

    // useState: Allows functional components to use state variables. It is a React Hook.
    let [count, setCount] = useState(0);

    function counter(){
        setCount(count+1);
        console.log(count);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={counter}>Click!</button>
        </div>
    )
}


