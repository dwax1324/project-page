import Card from "../components/Card"
import { useTheme } from '../components/ThemeProvider'
import '../css/project.css'

const Projects = () => {
    const darkTheme = useTheme();
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "top",
                    alignItems: "center",
                    padding: '20px',
                    minHeight: window.screen.height,
                    backgroundColor: darkTheme ? "#111" : "#fff",
                    color: darkTheme ? "#ccc" : "#333"
                }}
            >
                <div className="project-container">
                    <Card />
                </div>
            </div>
        </>
    )

}

export default Projects