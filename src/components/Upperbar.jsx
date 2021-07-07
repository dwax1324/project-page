import "../css/Upperbar.css"
import { Link } from "react-router-dom"
const Upperbar = () => {
    return (
        <>
            <div className="ub-container">

                <div className="ub-title">
                    <p>
                        XORDEN
                    </p>
                </div>
            </div>

            <div className="ub-menu">
                <Link to="/">
                    <div className='ub-main'>
                        Home
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="ub-pro">
                        Projects
                    </div>
                </Link>
                <Link to="/about">
                    <div className="ub-about">
                        about
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Upperbar