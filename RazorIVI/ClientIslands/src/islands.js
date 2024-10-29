// import { createRoot, update } from "ivi"

// export function mountIsland(component, elementId) {
//     const element = document.getElementById(elementId)
//     if (element) {
//         const root = createRoot(element)
//         update(root, component())
//     }
// }

// with logging
import { createRoot, update } from "ivi"

export function mountIsland(component, elementId) {
    const element = document.getElementById(elementId)
    if (element) {
        console.log(`Mounting island: ${elementId}`)
        const root = createRoot(element)
        update(root, component())
    } else {
        console.warn(`Element not found for island: ${elementId}`)
    }
}
