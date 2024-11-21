import { createRoot } from 'react-dom/client'
import './styles/index.css'
import NoteApp from './components/NoteApp.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
    <NoteApp/>
)