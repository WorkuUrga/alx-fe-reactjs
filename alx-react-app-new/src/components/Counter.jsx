import React from 'react'
import { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0)
    const Increment = ()=>{
        setCount(count + 1)
    }
    const Decrement = ()=> {
        setCount(count - 1)
    }
    const Reset = ()=> {
        setCount(0)
    }
    return(
        <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>Current Count: {count}</p>
            <button onClick={Increment} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Increment</button>
            <button onClick={Decrement} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Decrement</button>
            <button onClick={Reset} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Reset</button>
        </div>
    )
}
export default Counter;