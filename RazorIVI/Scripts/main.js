import { createRoot, update } from "ivi"
import { htm } from "@ivi/htm"
import { Counter } from "./components/Counter"

const App = () => htm`
    <div class="app">
        <h1>IVI App</h1>
        ${Counter()}
    </div>
`

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.getElementById('app'))
    update(root, App())
})
