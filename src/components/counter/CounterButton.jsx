
export default function CounterButton({by, incrementMethod, decrementMethod}){
    //array, with function ( these two things return the useState() method

    function incrementCounterFunction(){
        incrementMethod(by)
    }
    function decrementCounterFunction(){
        decrementMethod(by)
    }


    return (
        <div className="Counter" style={{textAlign:"center"}}>
            <div>
                <button className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
                <button className="counterButton" onClick={incrementCounterFunction}>+{by}</button>
            </div>

        </div>
    )
}