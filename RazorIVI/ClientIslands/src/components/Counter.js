import { component, useState } from "ivi"
import { htm } from "@ivi/htm"
import { mountIsland } from '../islands'

export const Counter = component((c) => {

console.log('Component loaded:', 'Counter/UserGreeting')
    
    const [count, setCount] = useState(c, 0)
    
    const increment = () => {
        setCount(count() + 1)
    }

    return () => htm`
        <div class="counter">
            <p>Count: ${count()}</p>
            <button @click=${increment}>Increment</button>
        </div>
    `
})

mountIsland(Counter, 'counter-island')
