import "../css/Upperbar.css"
import { Link } from "react-router-dom"
const Upperbar = () => {
    return (
        <>
            <div className="ub-container">

                <div className="ub-title">
                    <p>
                        Woojong's track
                    </p>
                </div>
            </div>

            <div className="ub-menu">
                <Link to="/" style={{ color: '#FFF' }}>
                    <div className='ub-main'>
                        Home
                    </div>
                </Link>
                <Link to="/projects" style={{ color: '#FFF' }}>
                    <div className="ub-pro">
                        Projects
                    </div>
                </Link>
                <Link to="/about" style={{ color: '#FFF' }}>
                    <div className="ub-about">
                        about
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Upperbar