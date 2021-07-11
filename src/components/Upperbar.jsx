import "../css/Upperbar.css"
import { Link } from "react-router-dom"
import { useTheme, useThemeUpdate } from './ThemeProvider'
const Upperbar = () => {

    const darkTheme = useTheme();
    const toggleDarkTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
        <>
            <div className="ub-container" style={themeStyles}>
                <button className="ub-theme-button" onClick={toggleDarkTheme}>
                    {darkTheme ? '🌙' : '😎'}
                </button>
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