import React from 'react'
import { useState } from 'react'

function Counter () {
    const [count, setCount] = useState(0)
    const Increament = ()=>{
        setCount(count + 1)
    }
    const Decreament = ()=> {
        setCount(count - 1)
    }
    const Reset = ()=> {
        setCount(0)
    }
    return(
        <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>Current Count: {count}</p>
            <button onClick={Increament} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Increament</button>
            <button onClick={Decreament} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Decreament</button>
            <button onClick={Reset} style={{margin: '5px', backgroundColor: 'blue', color: 'white', padding: '10px', width: '150px', border: 'none', borderRadius: '20px', fontSize: '20px'}}>Reset</button>
        </div>
    )
}
export default Counter;