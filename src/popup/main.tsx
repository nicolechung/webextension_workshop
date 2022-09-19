import { createRoot } from 'react-dom/client'
import { Popup } from './Popup'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<Popup />)
