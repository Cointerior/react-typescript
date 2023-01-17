import { ReactNode, useState } from "react"

type CountProp = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({ children, setCount }: CountProp) => {
     
    
    return (
        <div>
            <h1>{children}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>

    )
}

export default Counter