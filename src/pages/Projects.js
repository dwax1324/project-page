import Card from "../components/Card"
import '../css/project.css'

const Projects = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
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