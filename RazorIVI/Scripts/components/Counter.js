import { component, useState } from "ivi"
import { htm } from "@ivi/htm"

export const Counter = component((c) => {
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
