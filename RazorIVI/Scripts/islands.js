import { createRoot, update } from "ivi"

export function mountIsland(component, elementId) {
    const element = document.getElementById(elementId)
    if (element) {
        const root = createRoot(element)
        update(root, component())
    }
}
