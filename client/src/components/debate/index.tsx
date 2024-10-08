import './style.css'
import { Outlet } from 'react-router-dom'

interface DebateProps {
    children?: React.ReactNode
}

const Debate: React.FC<DebateProps> = ({ children }) => {
    return (
        <div id='debates' className='debates'>
            {children || <Outlet />}
        </div>
    )
}

export default Debate