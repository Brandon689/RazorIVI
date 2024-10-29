import { component, useState } from "ivi"
import { htm } from "@ivi/htm"
import { mountIsland } from '../../islands'

export const UserGreeting = component((c) => {
    const [name, setName] = useState(c, '')
    const [greeting, setGreeting] = useState(c, '')
    
    const updateGreeting = (e) => {
        setName(e.target.value)
        setGreeting(e.target.value ? `Hello, ${e.target.value}!` : '')
    }

    return () => htm`
        <div class="user-greeting">
            <div class="input-group mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Enter your name"
                    value=${name()}
                    @input=${updateGreeting}
                />
            </div>
            <p class="greeting-text">${greeting()}</p>
        </div>
    `
})

mountIsland(UserGreeting, 'greeting-island')
