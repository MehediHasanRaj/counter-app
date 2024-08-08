import './counter.css'
import {useState} from "react";
import CounterButton from './CounterButton';

export default function Counter() {
    const [count,setCount] = useState(0); // count is array, and setCount is function neame
    function incrementCounterParentFunction(by){
        setCount(count+by);
    }
    function decrementCounterParentFunction(by){
        setCount(count-by)
    }
    function resetCounter(){
        setCount(0);
    }
    return (
        <>
            <div style={{textAlign:"center"}}><span className="totalCount" >{count}</span></div>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <div style={{textAlign: "center"}}>
                <button className="counterButton" onClick={resetCounter} style={{backgroundColor:"#824f8c"}} >Reset</button>
            </div>
        </>
    )
}
